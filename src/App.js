import React , { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import './index.css';
import { motion, AnimatePresence } from "framer-motion"

import YearButton from './YearButton.js';
import YearGoals from './YearGoals.js';

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

function YearMenu(props) {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
        <YearButton year="3" handleYearClick={props.handleYearClick} />
        <YearButton year="5" handleYearClick={props.handleYearClick} />
        <YearButton year="7" handleYearClick={props.handleYearClick} />
      </Grid>
      <Grid container spacing={1}>
        <YearButton year="4" handleYearClick={props.handleYearClick} />
        <YearButton year="6" handleYearClick={props.handleYearClick} />
        <YearButton year="8" handleYearClick={props.handleYearClick} />
      </Grid>      
    </Container>
  );
}

function Header(props) {
  return (
    <a href="#">
      <Typography variant="h5" align="center" onClick={props.onClick}>
        nkproveit
      </Typography>
    </a>
  );
}

export default function App() {
  const [yearmenu, setYearmenu] = useState(true);
  const [goalsmenu, setGoalsMenu] = useState(false);
  const [showquiz, setShowQuiz] = useState(false);
  const [goalsYear, setGoalsYear] = useState(3);
  
  function handleYearClick (e) {
    setYearmenu(false);
    setGoalsMenu(true);
    setGoalsYear(e.currentTarget.id);
  }

  function handleGoalClick (e) {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id == 5) {
      setGoalsMenu(false);
      // setShowQuiz(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Header onClick={() => {setYearmenu(true); setGoalsMenu(false);}} />
        <br />
        {yearmenu && 
            <AnimatePresence>
              <motion.div 
              key="yearmenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
                <YearMenu handleYearClick={handleYearClick} />
              </motion.div>
            </AnimatePresence>}
        {!yearmenu && 
          <AnimatePresence>
            <motion.div 
            key="acc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
              <YearGoals year={goalsYear} handleGoalClick={handleGoalClick}/>
           </motion.div>
         </AnimatePresence>
        }
      </Container>
    </ThemeProvider>
  );
};
