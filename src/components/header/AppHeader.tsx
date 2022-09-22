import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import appLogo from "../../assets/images/app-logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./AppHeader.module.css";
import CityModal from "../cityModal/CityModal";

export const AppHeader = ({ bgColor }: any) => {
  const [state, setState] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Pune");
  const chooseCityName = (city: string) => {
    setSelectedCity(city);
  };
  return (
    <>
      <AppBar
        position="static"
        style={{
          background: bgColor,
          boxShadow: "none",
          marginTop: ".8em",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img src={appLogo} alt="logo" className={styles["app-logo"]} />
          </IconButton>
          <Stack
            sx={{ flexGrow: 1 }}
            className={styles["header-menu"]}
            direction="row"
            onClick={() => {
              setState(true);
            }}
          >
            <Typography className={styles["btn-typography"]}>
              {selectedCity}
            </Typography>
            <KeyboardArrowDownIcon />
          </Stack>
          <Stack direction="row" spacing={1} className={styles["header-menu"]}>
            <Button color="inherit">
              <Typography className={styles["btn-typography"]}>
                Spare
              </Typography>
            </Button>
            <Button color="inherit">
              <Typography className={styles["btn-typography"]}>Blog</Typography>
            </Button>
            <Button color="inherit">
              <Typography className={styles["btn-typography"]}>More</Typography>
            </Button>
            <Button variant="contained" color="error">
              <Typography className={styles["btn-typography"]}>
                Login
              </Typography>
            </Button>
          </Stack>
          <CityModal
            open={state}
            setOpen={setState}
            chooseCityName={chooseCityName}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};
