import React from "react";

//import "./deposit.css";

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

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


// Database Configs
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
  Check:{

    transform: "scale(1.32)",
  },
  box: {
    marginLeft: "2rem",

  }

  
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

export default function SecuritySection() {
  const classes = useStyles();

  

  const [isChecked, setIsChecked] = useState(false);
  const db = getDatabase(app);



  useEffect(() => {
    // Create a reference to the Firebase Realtime Database location
    const databaseRef = ref(db, 'Check');

    // Set up a real-time listener to monitor changes
    const unsubscribe =  onValue(databaseRef, (snapshot) => {
      const newValue = snapshot.val();
      setIsChecked(newValue); // Update the checkbox state based on the database value
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
      // Don't forget to remove the listener when no longer needed
    };
  }, []); // Empty dependency array to ensure this effect runs once








  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked ? 1 : 0;
    setIsChecked(event.target.checked);
    const db = getDatabase(app);
  
    // Update the Firebase Realtime Database with the new value
    set(ref(db, 'Check'), newValue);
  };
  
  


  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
       <Toolbar  >

          <Typography align="right" variant="h6">IoT Automation</Typography>

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
Security Section    
   <span className={classes.box}>

<FormControlLabel  className={classes.Check} control={<Checkbox  checked={isChecked}
          
          onChange={handleCheckboxChange} />} label="Required" />         
          </span>  


</Typography>
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
                    <BedIcon /> Motion Detection
                  </Typography>{" "}
           
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
                    <DiningIcon /> Face Recognition  

                  </Typography>

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
                    <LivingIcon /> 
Gas Leakage Detection

                  </Typography>{" "}
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
                    <KitchenIcon />  Security Door Lock
                  </Typography>{" "}
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </>
  );
}
