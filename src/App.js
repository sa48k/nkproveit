import React , { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import './index.css';
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
            <YearButton year="3" handleClick={props.handleClick} />
            <YearButton year="5" />
            <YearButton year="7" />
          </Grid>
          <Grid container spacing={1}>
            <YearButton year="4"/>
            <YearButton year="6"/>
            <YearButton year="8"/>
          </Grid>
        </ThemeProvider>
      </Container>
  );
}

function Header() {
  return (
    <a href="/">
      <Typography variant="h5" align="center">
        nkproveit
      </Typography>
    </a>
  );
}

export default function App() {
  const [yearmenu, setYearmenu] = useState(true);

    return (
      <Container maxWidth="sm">
        <Header />
        <br />
        {yearmenu ?
          <YearMenu handleClick={() => setYearmenu(false)} />
        :
        <YearGoals />}
      </Container>
    );
};
