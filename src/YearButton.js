import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class YearButton extends React.Component {
  handleClick() {
    alert('now we can hide the YearMenu and bring up the ACCORDION OF GOALS for year ' + this.props.year);
  }

  render() {
    return (
      <Grid item xs={4} >
        <Button fullWidth={true} className="huge-button" onClick={() => this.handleClick()} variant="contained" color="primary">
          <Typography variant="h5" align="center" >
            Year {this.props.year}
          </Typography>
        </Button>
      </Grid>
    );
  }
}

export default YearButton;