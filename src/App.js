import React , { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import './index.css';
import { CSSTransitionGroup } from 'react-transition-group'

import YearButton from './YearButton.js';
import YearGoals from './Accordion.js';

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


function YearMenu(props) {
  return (
      <Container maxWidth="sm">
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
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
  const [goalsYear, setGoalsYear] = useState(0);
  
  function handleYearClick (e) {
    setYearmenu(false);
    setGoalsYear(e.currentTarget.id);
  }

  return (
    <Container maxWidth="sm">
      <Header onClick={() => setYearmenu(true)} />
      <br />
      {yearmenu ?
        
        <CSSTransitionGroup 
        transitionName="example"
         transitionAppear={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        
          <YearMenu handleYearClick={handleYearClick} />
        
        </CSSTransitionGroup>
      :
      <CSSTransitionGroup 
        transitionName="example"
         
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
      <YearGoals year={goalsYear} />
       </CSSTransitionGroup>}
    </Container>
  );
};
