import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

class YearButton extends React.Component {
  render() {
    return (
      <Grid item xs={4} >
        <Button p={5} fullWidth="true" className="huge-button hvr-push" variant="contained" color="primary">
          <Typography variant="h4" align="center" >
            Year {this.props.year}
          </Typography>
        </Button>
      </Grid>
    );
  }
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        <Grid container spacing={1}>
          <YearButton year="3" />
          <YearButton year="5" />
          <YearButton year="7" />
        </Grid>
        {/*<br />*/}
        <Grid container spacing={1}>
          <YearButton year="4"/>
          <YearButton year="6"/>
          <YearButton year="8"/>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
