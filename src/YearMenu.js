import React from 'react';
import Grid from '@material-ui/core/Grid';
import YearButton from './YearButton.js';

export default function YearMenu(props) {
  return (
    <div>
      <Grid container spacing={1}>
        <YearButton year="3" {...props} />
        <YearButton year="5" {...props} />
        <YearButton year="7" {...props} />
      </Grid>
      <Grid container spacing={1}>
        <YearButton year="4" {...props} />
        <YearButton year="6" {...props} />
        <YearButton year="8" {...props} />
      </Grid>      
    </div>
  );
}