import React from "react";
import Card from "@mui/material/Card";

import styles from "./DateTime.module.css";
export const DateTime = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 730,
        height: 150,
        borderRadius: "0",
        marginTop: 4,
      }}
    >
      <h4 className={styles["dateTime-container-h4"]}>
        Select Date and Time of Service
      </h4>
    </Card>
  );
};
