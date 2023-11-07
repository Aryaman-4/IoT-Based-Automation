import React from "react";

import "../deposit.css";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LightOnoff from "../Rooms/LightOnoff";

// icons

import LightIcon from "@mui/icons-material/Light";
import BedIcon from "@mui/icons-material/Bed";
import DiningIcon from "@mui/icons-material/Dining";
import LivingIcon from "@mui/icons-material/Living";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterIcon from "@mui/icons-material/Water";
import CarRepairIcon from "@mui/icons-material/CarRepair";

import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Dining_Room2 from "../Rooms/Dining_Room2";
import LivingRoom_Room3 from "../Rooms/LivingRoom_Room3";

import { app } from "../../firebase";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  // Define your custom styles here
  btn: {
    backgroundColor: "rgb(228, 113, 72)", // Default background color
    color: "white", // Default text color
    "&:hover": {
      backgroundColor: "blue", // Background color on hover
    },
    "&:active": {
      backgroundColor: "#7847EB", // Background color on click
    },
  },

  btn1: {
    backgroundColor: "#7847EB", // Default background color
    color: "white", // Default text color
    "&:hover": {
      backgroundColor: "blue", // Background color on hover
    },
    "&:active": {
      backgroundColor: "#FB7B4A", // Background color on click
    },
  },

  h: {
    color: "#646F81",
    fontWeight: 600,
  },
  icon: {
    fontSize: "15rem",
    fontWeight: 600,
  },
}));

// For Basic Section Range Value

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 20,
    label: "20%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 100,
    label: "100%",
  },
];

function valueText(value: number) {
  return `${value}°C`;
}

export default function BasicSection() {
  /// For DH11 Sensor Getting values And For Watar Level detection
  const [data, setData] = useState({});
  const db = getDatabase();
  const dataRef = ref(db, "/DH11/Humidity"); // Replace with your data path
// For Water Level Detection


  const [Watardata, SetWaterData] = useState({});
  const dataRef_Water = ref(db, "/DH11/Water");

  // For Temprature detection
  const [Tempdata, SetTempData] = useState({});
  const Ref_Temp = ref(db, "/DH11/Temperature");
  



  useEffect(() => {
    // Create a real-time listener for data changes

    // Fetch the data for @Humidity
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const newData = snapshot.val();
      setData(newData);
    });
    // Fetch the data for @Water

    const unsubscribe2 = onValue(dataRef_Water, (snapshot) => {
      const newData2 = snapshot.val();
      SetWaterData(newData2);
    });




    const unsubscribe3 = onValue(Ref_Temp, (snapshot) => {
      const newData3 = snapshot.val();
      SetTempData(newData3);
    });





    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
      unsubscribe2();
      unsubscribe3();
    };
  }, []);

  // Slider Value of the Garuage Seting / Sending
  const [sliderValue, setSliderValue] = useState(0);

  const sliderRef = ref(db, "sliderValue"); //

  const handleChange = (event, newValue) => {
    // Update the local state
    setSliderValue(newValue);

    // Update the Firebase data
    set(sliderRef, newValue);
  };

  const [gData, SetgData] = useState({});
  const Gdataref = ref(db, "/sliderValue");
  useEffect(() => {
    // Create a real-time listener for data changes
    const unsubscribe3 = onValue(Gdataref, (snapshot) => {
      const newData = snapshot.val();
      SetgData(newData);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe3();
    };
  }, []);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">IoT Automation</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container maxWidth="md">
          <div>
            <Container maxWidth="sm" style={{ marginTop: "50px" }}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                IoT Home Automation
              </Typography>

              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Smart Home, Smart Life: Elevate Your Living with IoT-Based Home
                Automation!
              </Typography>

              <div>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Link to="/Basic">
                      <Button
                        variant="contained"
                        size="large"
                        className={classes.btn}
                      >
                        Basic Section
                      </Button>
                    </Link>
                  </Grid>

                  <Grid item>
                    <Link to="/Security">
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        className={classes.btn1}
                      >
                        Security Section
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </Container>

        <Container>
          <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Grid>
              <Grid item spacing={5}>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.h}
                  gutterBottom
                >
                  Basic Section
                </Typography>
                <Typography
                  variant="h5"
                  align="left"
                  color="text.secondary"
                  component="h5"
                >
                  <Box sx={{ bgcolor: "background.paper", p: 6 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={4} sm={4}>
                        <Item>
                          {" "}
                          <Typography
                            variant="h5"
                            align="left"
                            color="text.secondary"
                            component="h6"
                          >
                            <DeviceThermostatIcon /> Room Temperature
                            <br></br> <pre>{JSON.stringify(Tempdata, null, 2)}</pre>
                          </Typography>{" "}
                        </Item>
                      </Grid>
                      <Grid item xs={6} md={4} sm={4}>
                        <Item>
                          <Typography
                            variant="h5"
                            align="left"
                            color="text.secondary"
                            component="h6"
                          >
                            <WaterIcon /> Water Level
                            <br></br>
                            <pre>{JSON.stringify(Watardata, null, 2)}</pre>
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={6} sm={4} md={4}>
                        <Item>
                          <Typography
                            variant="h5"
                            align="left"
                            color="text.secondary"
                            component="h6"
                          >
                            <CarRepairIcon /> Humidity
                            <br></br>
                            <pre>{JSON.stringify(data, null, 2)}</pre>

                          </Typography>
                        </Item>
                      </Grid>


                      <Grid item xs={6} sm={4} md={8}>
                        <Item>
                          <Typography
                            variant="h5"
                            align="left"
                            color="text.secondary"
                            component="h6"
                          >
                            <CarRepairIcon /> Water Pump Status
                            <br></br>
                            <pre>open</pre>
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                  <CarRepairIcon className={classes.icon} /> Garauge Control
                </Typography>

                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={0}
                    value={sliderValue}
                    onChange={handleChange}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Grid>
              <Grid item className="Typo">
                <Typography
                  variant="h5"
                  align="left"
                  color="text.secondary"
                  component="h5"
                  className="Typo"
                >
                  <br /> <br />
                  <LightIcon className={classes.icon} /> Basic Appliance Control
                </Typography>

                {/*  <LightOnoff /> */}
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Item>
                  {" "}
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    component="h6"
                  >
                    <BedIcon /> Bedroom
                  </Typography>{" "}
                  <LightOnoff />
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    component="h6"
                  >
                    <DiningIcon /> Dining
                  </Typography>

                  <Dining_Room2 />
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    component="h6"
                  >
                    <LivingIcon /> LivingRoom
                  </Typography>{" "}
                  <LivingRoom_Room3 />
                </Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    component="h6"
                  >
                    <KitchenIcon /> Kitchen
                  </Typography>{" "}
                  <LightOnoff />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </>
  );
}
