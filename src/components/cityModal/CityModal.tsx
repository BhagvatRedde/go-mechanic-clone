import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import { CitiesData } from "../serviceModal/carBrands";
import logo from "../../assets/images/delhi.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 6,
  zIndex: 1,
};

export default function CityModal({ open, setOpen, chooseCityName }: any) {
  const handleClose = () => setOpen(false);
  // const { AllData } = useSelector((state) => state);
  const [City, setCity] = useState([]);
  // console.log(AllData);
  useEffect(() => {
    axios
      .get("http://localhost:3000/City")
      .then((res: any) => setCity(res.data))
      .catch((err: any) => console.log(err));
    console.log(setCity);
  }, [City]);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Collapse in={open}>
          <Box sx={style}>
            <Stack>
              <Typography
                id="transition-modal-title"
                variant="h5"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Choose Your City
              </Typography>
            </Stack>
            <Stack sx={{ marginBottom: "2em" }}>
              <Typography id="transition-modal-description">
                This would help us in providing you quick service..
              </Typography>
            </Stack>
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 5 }}
              sx={{ textAlign: "center" }}
            >
              {City.map((data: any, i: any) => (
                <Grid item xs={2} sm={4} md={1} key={i}>
                  <div
                    className="d-flex flex-column justify-content-center cursor-pointer"
                    onClick={() => {
                      chooseCityName(data.name);
                      handleClose();
                    }}
                  >
                    <div>
                      <img
                        src={data.image}
                        alt="img"
                        style={{ width: "35%", height: "35%" }}
                      />
                    </div>
                    <span>{data.name}</span>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      </Modal>
    </div>
  );
}
