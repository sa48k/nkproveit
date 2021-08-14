import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function YearButton(props) {
     return (
      <Grid item xs={4} >
        <Button fullWidth={true} onClick={props.onClick}  className="huge-button" variant="contained" color="primary">
          <Typography variant="h5" align="center" >
            Year {props.year}
          </Typography>
        </Button>
      </Grid>
    );
  }
