import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import TabPanel from "./components/TabPanel";
import BattlefieldGenerator from "./components/BattlefieldGenerator";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Battlefield Generator" {...a11yProps(0)} />
          <Tab label="Ruse Generator" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={selectedTab} index={0}>
        <BattlefieldGenerator />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}

export default App;
