import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { StickyMenuData } from "./data";

export function StickyHeader() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 800 },
        bgcolor: "#f6f6f6",
        color: "#4a4a4a",
        position: "sticky",
      }}
      className="sticky-top"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          color: "#4a4a4a",
        }}
      >
        {StickyMenuData.map((data) => (
          <Tab label={data} />
        ))}
      </Tabs>
    </Box>
  );
}
