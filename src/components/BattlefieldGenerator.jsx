import { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Checkbox,
  MenuItem,
  ListItemText,
  Card,
  Button,
  Typography,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import {
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  TWISTS,
  TERRAIN_TYPES,
  MAPS,
  UNIT_TYPES,
  ROUND_CONFIGS,
} from "../data/data";
import {
  shuffleAndSelect,
  getRandomFromArray,
} from "../services/randomization";

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
  const [showTwist, setShowTwist] = useState(false);

  const [battlefield, setBattlefield] = useState({
    primaryObjective: null,
    secondaryObjective: null,
    twists: [],
    terrain: null,
    map: null,
    rewardUnitType: null,
    pointTotal: null,
  });

  const [showMap, setShowMap] = useState(false);

  const handleRoundNumberChange = (event) => {
    setRoundNumber(event.target.value);
  };
  const toggleShowTwist = () => {
    setShowTwist(!showTwist);
  };

  const toggleShowMap = () => {
    setShowMap(!showMap);
  };

  const generateBattlefield = () => {
    const roundConfig = getRoundConfig(roundNumber);

    const twists = [];
    for (let i = 0; i < roundConfig.numberOfTwists; i++) {
      twists.push(getRandomFromArray(TWISTS));
    }

    const primaryObjective = getRandomFromArray(PRIMARY_OBJECTIVES);
    const secondaryObjective = getRandomFromArray(SECONDARY_OBJECTIVES);
    const terrain = getRandomFromArray(TERRAIN_TYPES);
    const map = getRandomFromArray(MAPS);

    const rewardUnitType = shuffleAndSelect(UNIT_TYPES, 1);

    let battlefieldConditions = {
      twists,
      primaryObjective,
      secondaryObjective,
      terrain,
      rewardUnitType,
      map,
      pointTotal: roundConfig.pointTotal,
    };

    setBattlefield(battlefieldConditions);
    setShowTwist(false);
    setShowMap(false);
  };

  return (
    <Grid container direction="column" style={{ margin: 0 }}>
      <Grid item style={{ maxWidth: "100%" }}>
        <Card style={{ margin: "16px", padding: "16px" }}>
          <Grid container direction="column" spacing={4}>
            <Grid item></Grid>
            <Grid item>
              <Grid container direction="row" alignItems="flex-end">
                <Grid item xs={1} style={{ paddingRight: "16px" }}>
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
                <Grid item xs={1} style={{ height: "inherit" }}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    style={{ height: "100%" }}
                  >
                    <Grid item>
                      <Button variant="contained" onClick={generateBattlefield}>
                        Generate a Battlefield
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item style={{ maxWidth: "100%" }}>
        <Card style={{ margin: "16px", padding: "16px" }}>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item xs={6}>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h4">Primary Objective</Typography>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.primaryObjective?.name}
                  </Typography>
                  <Typography variant="body" style={{ paddingLeft: "16px" }}>
                    {battlefield.primaryObjective?.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Secondary Objective</Typography>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.secondaryObjective?.name}
                  </Typography>
                  <Typography variant="body" style={{ paddingLeft: "16px" }}>
                    {battlefield.secondaryObjective?.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">
                    Twist{battlefield.twists.length > 1 ? "s" : null}
                  </Typography>
                  {showTwist ? (
                    <div onClick={toggleShowTwist}>
                      {battlefield.twists.map((twist) => (
                        <>
                          <Typography
                            variant="h6"
                            style={{ paddingLeft: "16px" }}
                          >
                            {twist.name}
                          </Typography>
                          <Typography
                            variant="body"
                            style={{ paddingLeft: "16px" }}
                          >
                            {twist.description}
                          </Typography>
                        </>
                      ))}
                    </div>
                  ) : (
                    <Button variant="contained" onClick={toggleShowTwist}>
                      Show Twist{battlefield.twists.length > 1 ? "s" : null}
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h4">Reward Unit Type</Typography>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.rewardUnitType}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Battlefield Terrain</Typography>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.terrain}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Deployment Map</Typography>
                  {showMap ? (
                    <img src={battlefield.map?.image} onClick={toggleShowMap} />
                  ) : (
                    <Button variant="contained" onClick={toggleShowMap}>
                      Show Map
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default BattlefieldGenerator;
