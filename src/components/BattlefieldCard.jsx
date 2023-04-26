import { useState, useEffect } from "react";
import { Grid, Card, Button, Typography } from "@mui/material";

function BattlefieldCard({ battlefield }) {
  const [showTwist, setShowTwist] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const toggleShowTwist = () => {
    setShowTwist(!showTwist);
  };

  const toggleShowMap = () => {
    setShowMap(!showMap);
  };

  useEffect(() => {
    setShowTwist(false);
    setShowMap(false);
  }, [battlefield]);

  return (
    <Card style={{ margin: "16px", padding: "16px" }}>
      <Typography variant="h2">{battlefield.battleName}</Typography>
      <Grid container direction="row" justifyContent="space-around" spacing={4}>
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
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Typography variant="h4">
                Twist{battlefield.twists.length > 1 ? "s" : null}
              </Typography>
              {showTwist ? (
                <div onClick={toggleShowTwist}>
                  {battlefield.twists.map((twist) => (
                    <div key={twist.name}>
                      <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                        {twist.name}
                      </Typography>
                      <Typography
                        variant="body"
                        style={{ paddingLeft: "16px" }}
                      >
                        {twist.description}
                      </Typography>
                    </div>
                  ))}
                </div>
              ) : (
                <Button variant="contained" onClick={toggleShowTwist}>
                  Show Twist{battlefield.twists.length > 1 ? "s" : null}
                </Button>
              )}
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={4}>
                <Grid item>
                  <Typography variant="h4">Reward Unit Type</Typography>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.rewardUnitType}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Battle Points</Typography>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.pointTotal}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Battlefield Terrain</Typography>
                  <Typography variant="h6" style={{ paddingLeft: "16px" }}>
                    {battlefield.terrain}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default BattlefieldCard;
