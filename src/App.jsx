import { useState } from "react";
import "./App.css";
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
  RUSES,
  PRIMARY_OBJECTIVES,
  SECONDARY_OBJECTIVES,
  SUDDEN_DEATH_CONDITIONS,
  TWISTS,
  TERRAIN_TYPES,
  WINNER_REWARDS,
  LOSER_REWARDS,
} from "./data/data";
import { shuffleAndSelect, getRandomFromArray } from "./services/randomization";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const W_ONE_OF_ONE = "w_one_of_one";
const W_TWO_OF_THREE = "w_two_of_three";
const W_THREE_OF_FIVE = "w_three_of_five";

const L_ONE_OF_ONE = "l_one_of_one";
const L_ONE_OF_THREE = "l_one_of_three";
const L_TWO_OF_FIVE = "l_two_of_five";

function App() {
  const [primaryObjectives, setPrimaryObjectives] =
    useState(PRIMARY_OBJECTIVES);
  const [secondaryObjectives, setSecondaryObjectives] =
    useState(SECONDARY_OBJECTIVES);

  const [twists, setTwists] = useState(TWISTS);
  const [numberOfTwists, setNumberOfTwists] = useState(1);
  const [showTwist, setShowTwist] = useState(false);

  const [ruses, setRuses] = useState(RUSES);
  const [showRuse, setShowRuse] = useState(false);

  const [suddenDeaths, setSuddenDeaths] = useState(SUDDEN_DEATH_CONDITIONS);
  const [showSuddenDeath, setShowSuddenDeath] = useState(false);

  const [battlefield, setBattlefield] = useState({
    primaryObjective: null,
    secondaryObjective: null,
    ruse: null,
    suddenDeath: null,
    twist: [],
  });

  const [winnerSelection, setWinnerSelection] = useState(W_ONE_OF_ONE);
  const [loserSelection, setLoserSelection] = useState(L_ONE_OF_ONE);

  const handlePrimaryObjectiveChange = (event) => {
    const {
      target: { value },
    } = event;
    setPrimaryObjectives(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSecondaryObjectiveChange = (event) => {
    const {
      target: { value },
    } = event;
    setSecondaryObjectives(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleTwistsChange = (event) => {
    const {
      target: { value },
    } = event;
    setTwists(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleNumberOfTwistsChange = (event) => {
    setNumberOfTwists(event.target.value);
  };
  const toggleShowTwist = () => {
    setShowTwist(!showTwist);
  };

  const handleRusesChange = (event) => {
    const {
      target: { value },
    } = event;
    setRuses(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const toggleShowRuse = () => {
    setShowRuse(!showRuse);
  };

  const handleSuddenDeathChange = (event) => {
    const {
      target: { value },
    } = event;
    setSuddenDeaths(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const toggleShowSuddenDeath = () => {
    setShowSuddenDeath(!showSuddenDeath);
  };

  const handleWinnerSelectionChange = (event) => {
    setWinnerSelection(event.target.value);
  };
  const handleLoserSelectionChange = (event) => {
    setLoserSelection(event.target.value);
  };

  const generateBattlefield = () => {
    const ruse = getRandomFromArray(ruses);
    const suddenDeath = getRandomFromArray(suddenDeaths);
    const twist = [];
    console.log(numberOfTwists);
    if (numberOfTwists > 0) {
      for (let i = 0; i < numberOfTwists; i++) {
        twist.push(getRandomFromArray(twists));
      }
    }

    const primaryObjective = getRandomFromArray(primaryObjectives);
    const secondaryObjective = getRandomFromArray(secondaryObjectives);
    const terrain = getRandomFromArray(TERRAIN_TYPES);

    const winnerOptions = shuffleAndSelect(
      WINNER_REWARDS,
      winnerSelection === W_ONE_OF_ONE
        ? 1
        : winnerSelection === W_TWO_OF_THREE
        ? 3
        : 5
    );
    const loserOptions = shuffleAndSelect(
      LOSER_REWARDS,
      loserSelection === L_ONE_OF_ONE
        ? 1
        : loserSelection === L_ONE_OF_THREE
        ? 3
        : 5
    );

    let battlefieldConditions = {
      ruse,
      suddenDeath,
      twist,
      primaryObjective,
      secondaryObjective,
      terrain,
      winnerOptions,
      loserOptions,
    };

    console.log(battlefieldConditions);
    setBattlefield(battlefieldConditions);
    setShowRuse(false);
    setShowTwist(false);
    setShowSuddenDeath(false);
  };

  return (
    <Grid container direction="column" style={{ margin: 0 }}>
      <Grid item style={{ maxWidth: "100%" }}>
        <Card style={{ margin: "16px", padding: "16px" }}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Grid container direction="row" style={{ margin: 0 }}>
                <Grid item xs={2} style={{ paddingRight: "16px" }}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel id="primary-objectives-label">
                      Primary Objectives to Include
                    </InputLabel>
                    <Select
                      labelId="primary-objectives-label"
                      id="primary-objectives"
                      multiple
                      value={primaryObjectives}
                      onChange={handlePrimaryObjectiveChange}
                      input={
                        <OutlinedInput
                          id="primary-objectives-chip"
                          label="Primary Objectives to Include"
                        />
                      }
                      renderValue={(selected) =>
                        selected.map((e) => e.name).join(", ")
                      }
                      MenuProps={MenuProps}
                    >
                      {PRIMARY_OBJECTIVES.map((objective) => (
                        <MenuItem key={objective.name} value={objective}>
                          <Checkbox
                            checked={primaryObjectives.indexOf(objective) > -1}
                          />
                          <ListItemText
                            primary={objective.name}
                            secondary={objective.category}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2} style={{ paddingRight: "16px" }}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel id="secondary-objectives-label">
                      Secondary Objectives to Include
                    </InputLabel>
                    <Select
                      labelId="secondary-objectives-label"
                      id="secondary-objectives"
                      multiple
                      value={secondaryObjectives}
                      onChange={handleSecondaryObjectiveChange}
                      input={
                        <OutlinedInput
                          id="secondary-objectives-chip"
                          label="Secondary Objectives to Include"
                        />
                      }
                      renderValue={(selected) =>
                        selected.map((e) => e.name).join(", ")
                      }
                      MenuProps={MenuProps}
                    >
                      {SECONDARY_OBJECTIVES.map((objective) => (
                        <MenuItem key={objective.name} value={objective}>
                          <Checkbox
                            checked={
                              secondaryObjectives.indexOf(objective) > -1
                            }
                          />
                          <ListItemText
                            primary={objective.name}
                            secondary={objective.category}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2} style={{ paddingRight: "16px" }}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel id="twists-label">Twists to Include</InputLabel>
                    <Select
                      labelId="twists-label"
                      id="twists"
                      multiple
                      value={twists}
                      onChange={handleTwistsChange}
                      input={
                        <OutlinedInput
                          id="twists-chip"
                          label="Twists to Include"
                        />
                      }
                      renderValue={(selected) =>
                        selected.map((e) => e.name).join(", ")
                      }
                      MenuProps={MenuProps}
                    >
                      {TWISTS.map((twist) => (
                        <MenuItem key={twist.name} value={twist}>
                          <Checkbox checked={twists.indexOf(twist) > -1} />
                          <ListItemText
                            primary={twist.name}
                            secondary={twist.category}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2} style={{ paddingRight: "16px" }}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel id="ruses-label">Ruses to Include</InputLabel>
                    <Select
                      labelId="ruses-label"
                      id="ruses"
                      multiple
                      value={ruses}
                      onChange={handleRusesChange}
                      input={
                        <OutlinedInput
                          id="ruses-chip"
                          label="Ruses Objectives to Include"
                        />
                      }
                      renderValue={(selected) =>
                        selected.map((e) => e.name).join(", ")
                      }
                      MenuProps={MenuProps}
                    >
                      {RUSES.map((ruse) => (
                        <MenuItem key={ruse.name} value={ruse}>
                          <Checkbox checked={ruses.indexOf(ruse) > -1} />
                          <ListItemText
                            primary={ruse.name}
                            secondary={ruse.category}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel id="sudden-death-label">
                      Sudden Death Conditions to Include
                    </InputLabel>
                    <Select
                      labelId="sudden-death-label"
                      id="sudden-death"
                      multiple
                      value={suddenDeaths}
                      onChange={handleSuddenDeathChange}
                      input={
                        <OutlinedInput
                          id="sudden-death-chip"
                          label="Sudden Death Conditions to Include"
                        />
                      }
                      renderValue={(selected) =>
                        selected.map((e) => e.name).join(", ")
                      }
                      MenuProps={MenuProps}
                    >
                      {SUDDEN_DEATH_CONDITIONS.map((condition) => (
                        <MenuItem key={condition.name} value={condition}>
                          <Checkbox
                            checked={suddenDeaths.indexOf(condition) > -1}
                          />
                          <ListItemText
                            primary={condition.name}
                            secondary={condition.category}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" alignItems="flex-end">
                <Grid item xs={1} style={{ paddingRight: "16px" }}>
                  <TextField
                    id="twists-number"
                    label="Number of Twists"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={numberOfTwists}
                    onChange={handleNumberOfTwistsChange}
                    error={numberOfTwists < 0}
                    helperText={
                      numberOfTwists < 0
                        ? "The number of twists can't be less than 0"
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={3} style={{ paddingRight: "16px" }}>
                  <FormControl>
                    <FormLabel id="winner-rewards-group-label">
                      Winner Rewards
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="winner-rewards-group-label"
                      name="winner-rewards-group"
                      value={winnerSelection}
                      onChange={handleWinnerSelectionChange}
                    >
                      <FormControlLabel
                        value={W_ONE_OF_ONE}
                        control={<Radio />}
                        label="One of One"
                      />
                      <FormControlLabel
                        value={W_TWO_OF_THREE}
                        control={<Radio />}
                        label="Two of Three"
                      />
                      <FormControlLabel
                        value={W_THREE_OF_FIVE}
                        control={<Radio />}
                        label="Three of Five"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={3} style={{ paddingRight: "16px" }}>
                  <FormControl>
                    <FormLabel id="loser-rewards-group-label">
                      Loser Rewards
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="loser-rewards-group-label"
                      name="loser-rewards-group"
                      value={loserSelection}
                      onChange={handleLoserSelectionChange}
                    >
                      <FormControlLabel
                        value={L_ONE_OF_ONE}
                        control={<Radio />}
                        label="One of One"
                      />
                      <FormControlLabel
                        value={L_ONE_OF_THREE}
                        control={<Radio />}
                        label="One of Three"
                      />
                      <FormControlLabel
                        value={L_TWO_OF_FIVE}
                        control={<Radio />}
                        label="Two of Five"
                      />
                    </RadioGroup>
                  </FormControl>
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
                        Generate Battlefield
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
                Twist{battlefield.twist.length > 1 ? "s" : null}
              </Typography>
              {showTwist ? (
                <div onClick={toggleShowTwist}>
                  {battlefield.twist.map((twist) => (
                    <>
                      <Typography variant="h6" style={{ paddingLeft: "16px" }}>
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
                  Show Twist{battlefield.twist.length > 1 ? "s" : null}
                </Button>
              )}
            </Grid>
            <Grid item>
              <Typography variant="h4">Sudden Death</Typography>
              {showSuddenDeath ? (
                <div onClick={toggleShowSuddenDeath}>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.suddenDeath?.name}
                  </Typography>
                  <Typography variant="body" style={{ paddingLeft: "16px" }}>
                    {battlefield.suddenDeath?.description}
                  </Typography>
                </div>
              ) : (
                <Button variant="contained" onClick={toggleShowSuddenDeath}>
                  Show Sudden Death
                </Button>
              )}
            </Grid>
            <Grid item>
              <Typography variant="h4">Ruse</Typography>
              {showRuse ? (
                <div onClick={toggleShowRuse}>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.ruse?.name}
                  </Typography>
                  <Typography variant="body" style={{ paddingLeft: "16px" }}>
                    {battlefield.ruse?.description}
                  </Typography>
                </div>
              ) : (
                <Button variant="contained" onClick={toggleShowRuse}>
                  Show Ruse
                </Button>
              )}
            </Grid>
            <Grid item>
              <Typography variant="h4">Battlefield Terrain</Typography>
              <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                {battlefield.terrain}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">Victor Rewards</Typography>
              <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                Choose{" "}
                {winnerSelection === W_ONE_OF_ONE
                  ? 1
                  : winnerSelection === W_TWO_OF_THREE
                  ? 2
                  : 3}{" "}
                of these rewards:
              </Typography>
              <ul style={{ paddingLeft: "32px" }}>
                {battlefield.winnerOptions.map((option) => (
                  <li key={option}>
                    <Typography variant="body">{option}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item>
              <Typography variant="h4">Loser Rewards</Typography>
              <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                Choose{" "}
                {loserSelection === L_ONE_OF_ONE
                  ? 1
                  : loserSelection === L_ONE_OF_THREE
                  ? 1
                  : 2}{" "}
                of these rewards:
              </Typography>
              <ul style={{ paddingLeft: "32px" }}>
                {battlefield.loserOptions.map((option) => (
                  <li key={option}>
                    <Typography variant="body">{option}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
