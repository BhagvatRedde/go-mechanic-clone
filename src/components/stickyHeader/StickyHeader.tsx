import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";
import { StickyMenuData } from "./data";
// import { HashLink } from "react-router-hash-link";
import styles from "./StickyHeader.module.css";
export function StickyHeader() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function scrollSmoothTo(elementId: any) {
    var element: any = document.getElementById(elementId);
    console.log(element);
    element.scrollIntoView({
      block: "start",
      // behavior: "smooth",
    });
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 800 },
        bgcolor: "#f6f6f6",
        color: "#4a4a4a",
        position: "sticky",
      }}
      className={`${styles["sticky-header"]} sticky-top`}
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
        }}
        className={styles["sticky-tabs"]}
      >
        {StickyMenuData.map((data, index) => (
          <Tab
            label={data.title}
            key={index}
            sx={{
              textTransform: "capitalize",
              color: "#4a4a4a",
              fontWeight: "600",
              fontStretch: "normal",
              fontStyle: "normal",
              fontSize: ".9rem",
            }}
            onClick={() => {
              scrollSmoothTo(data.id);
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
