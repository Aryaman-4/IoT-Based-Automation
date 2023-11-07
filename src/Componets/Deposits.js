import React from "react";
import "./deposit.css";

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
import LightOnoff from "./Rooms/LightOnoff";

// icons

import LightIcon from "@mui/icons-material/Light";
import BedIcon from "@mui/icons-material/Bed";
import DiningIcon from "@mui/icons-material/Dining";
import LivingIcon from "@mui/icons-material/Living";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterIcon from "@mui/icons-material/Water";
import CarRepairIcon from "@mui/icons-material/CarRepair";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

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
    value: 37,
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

export default function Deposits() {
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


















        
      </main>
    </>
  );
}
