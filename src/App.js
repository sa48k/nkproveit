import React from 'react';
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

class YearMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({hide: true});
  }

  render() {
    return (
      !this.state.hide ? 
        <Container maxWidth="sm">
          <ThemeProvider theme={theme}>
            <Grid container spacing={1}>
              <YearButton year="3" onClick={this.handleClick} />
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
        :
        <h1>honk</h1>
      );
  }
}

export default function App() {
  return (
    <Container maxWidth="sm">
    <YearMenu />
    <br />
    <YearGoals />
    </Container>
    );
}
