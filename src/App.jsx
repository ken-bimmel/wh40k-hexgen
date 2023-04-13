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
} from "@mui/material";
import {
  PRIMARY_OBJECTIVES,
  RUSES,
  SECONDARY_OBJECTIVES,
  SUDDEN_DEATH_CONDITIONS,
  TWISTS,
} from "./data/data";

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

function getRandomFromArray(array) {
  if (array === undefined || array === null || array.length < 1) {
    return null;
  }
  return array[Math.floor(Math.random() * array.length)];
}

function App() {
  const [primaryObjectives, setPrimaryObjectives] = useState(
    PRIMARY_OBJECTIVES.map((obj) => obj.name)
  );
  const [secondaryObjectives, setSecondaryObjectives] = useState(
    SECONDARY_OBJECTIVES.map((obj) => obj.name)
  );

  const [twists, setTwists] = useState(TWISTS.map((obj) => obj.name));
  const [numberOfTwists, setNumberOfTwists] = useState(1);

  const [ruses, setRuses] = useState(RUSES.map((obj) => obj.name));
  const [showRuse, setShowRuse] = useState(false);

  const [suddenDeaths, setSuddenDeaths] = useState(
    SUDDEN_DEATH_CONDITIONS.map((obj) => obj.name)
  );

  const [battlefield, setBattlefield] = useState({
    primaryObjective: null,
    secondaryObjective: null,
    ruse: null,
    suddenDeath: null,
    twist: [],
  });

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

  const generateBattlefield = () => {
    const primaryObjective = getRandomFromArray(primaryObjectives);
    const secondaryObjective = getRandomFromArray(secondaryObjectives);
    const ruse = getRandomFromArray(ruses);
    const suddenDeath = getRandomFromArray(suddenDeaths);
    const twist = [];
    console.log(numberOfTwists);
    if (numberOfTwists > 0) {
      for (let i = 0; i < numberOfTwists; i++) {
        twist.push(getRandomFromArray(twists));
      }
    }
    const battlefieldConditions = {
      primaryObjective,
      secondaryObjective,
      ruse,
      suddenDeath,
      twist,
    };

    console.log(battlefieldConditions);
    setBattlefield(battlefieldConditions);
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
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {PRIMARY_OBJECTIVES.map((objective) => (
                        <MenuItem key={objective.name} value={objective.name}>
                          <Checkbox
                            checked={
                              primaryObjectives.indexOf(objective.name) > -1
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
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {SECONDARY_OBJECTIVES.map((objective) => (
                        <MenuItem key={objective.name} value={objective.name}>
                          <Checkbox
                            checked={
                              secondaryObjectives.indexOf(objective.name) > -1
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
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {TWISTS.map((objective) => (
                        <MenuItem key={objective.name} value={objective.name}>
                          <Checkbox
                            checked={twists.indexOf(objective.name) > -1}
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
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {RUSES.map((objective) => (
                        <MenuItem key={objective.name} value={objective.name}>
                          <Checkbox
                            checked={ruses.indexOf(objective.name) > -1}
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
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {SUDDEN_DEATH_CONDITIONS.map((objective) => (
                        <MenuItem key={objective.name} value={objective.name}>
                          <Checkbox
                            checked={suddenDeaths.indexOf(objective.name) > -1}
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
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item xs={2}>
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
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography variant="h6">Primary Objective</Typography>
              <Typography variant="subtitle1" style={{ paddingLeft: "16px" }}>
                {battlefield.primaryObjective}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Secondary Objective</Typography>
              <Typography variant="subtitle1" style={{ paddingLeft: "16px" }}>
                {battlefield.secondaryObjective}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Twists</Typography>
              <Typography variant="subtitle1" style={{ paddingLeft: "16px" }}>
                {battlefield.twist.map((e, index) =>
                  index < battlefield.twist.length - 1 ? `${e}, ` : e
                )}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Sudden Death Condition</Typography>
              <Typography variant="subtitle1" style={{ paddingLeft: "16px" }}>
                {battlefield.suddenDeath}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Ruse</Typography>
              <Typography
                variant="subtitle1"
                style={showRuse ? { paddingLeft: "16px" } : null}
              >
                {showRuse ? (
                  <span onClick={toggleShowRuse}>{battlefield.ruse}</span>
                ) : (
                  <Button variant="contained" onClick={toggleShowRuse}>
                    Show Ruse
                  </Button>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
