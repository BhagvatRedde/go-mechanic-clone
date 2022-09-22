import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import { TabPanel, TabContext, TabList } from "@mui/lab";

import { AppHeader } from "../../components/header/AppHeader";

import styles from "./ServiceTabs.module.css";
export function ServiceTabs() {
  const AppData = useSelector((state: any) => state.data[0]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Itemd One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box> */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", boxShadow: 4 }}>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={true}
              aria-label="visible arrows tabs example text-center"
            >
              {AppData &&
                AppData[0]?.ServiceTabsData?.map((data: any, i: number) => (
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <img src={data.icon} className={styles["tab-image"]} />
                    <Tab
                      label={data.name}
                      value={data.value}
                      color="black"
                      sx={{
                        fontSize: "0.7rem",
                        textTransform: "none",
                        lineHeight: 1.12,
                        width: 145,
                        marginTop: "-0.5rem",
                      }}
                    />
                  </div>
                ))}
            </TabList>
          </Box>
          <TabPanel value="1">Item Onsdfse</TabPanel>
          <TabPanel value="2">Item twcdcdo</TabPanel>
          <TabPanel value="3">Item One</TabPanel>
          <TabPanel value="4">Item One</TabPanel>
          <TabPanel value="5">Item One</TabPanel>
          <TabPanel value="6">Item One</TabPanel>
          <TabPanel value="7">Item One</TabPanel>
          <TabPanel value="8">Item One</TabPanel>
          <TabPanel value="9">Item One</TabPanel>
          <TabPanel value="10">Item One</TabPanel>
          <TabPanel value="11">Item One</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
