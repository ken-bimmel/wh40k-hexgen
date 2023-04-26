import { useState } from "react";
import { Grid, TextField, Card, Button } from "@mui/material";
import { ROUND_CONFIGS } from "../data/data";
import { generateBattlefield } from "../services/battlefieldGenerator";
import BattlefieldCard from "./BattlefieldCard";

const NUMBER_OF_BATTLEFIELDS_PER_ROUND = 2;

function getRoundConfig(roundNumber) {
  for (let roundConfig of ROUND_CONFIGS) {
    if (
      roundConfig.roundMin <= roundNumber &&
      roundNumber <= roundConfig.roundMax
    ) {
      return roundConfig;
    }
  }
}

function BattlefieldGenerator() {
  const [roundNumber, setRoundNumber] = useState(1);

  const [battlefields, setBattlefields] = useState([]);

  const [showBattlefield, setShowBattlefield] = useState(false);

  const handleRoundNumberChange = (event) => {
    setRoundNumber(event.target.value);
  };

  const generateRound = () => {
    setShowBattlefield(true);
    setBattlefields([]);

    const roundConfig = getRoundConfig(roundNumber);

    const tempBattlefields = [];
    for (let i = 0; i < NUMBER_OF_BATTLEFIELDS_PER_ROUND; i++) {
      tempBattlefields.push(generateBattlefield(roundConfig));
    }

    setBattlefields(tempBattlefields);
  };

  return (
    <Grid container direction="column" style={{ margin: 0 }}>
      <Grid item style={{ maxWidth: "100%" }}>
        <Card style={{ margin: "16px", padding: "16px" }}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <Grid item style={{ paddingRight: "16px" }}>
                  <TextField
                    id="round-number"
                    label="Round Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={roundNumber}
                    onChange={handleRoundNumberChange}
                    error={roundNumber < 1}
                    helperText={
                      roundNumber < 1
                        ? "The round number can't be less than 1"
                        : null
                    }
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={generateRound}>
                    Generate a League Round
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {showBattlefield ? (
        <Grid item style={{ maxWidth: "100%" }}>
          {battlefields.map((battlefield) => {
            return (
              <BattlefieldCard battlefield={battlefield} key={battlefield.id} />
            );
          })}
        </Grid>
      ) : null}
    </Grid>
  );
}

export default BattlefieldGenerator;
