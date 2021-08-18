import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header(props) {
  return (
    <a href="#">
      <Typography variant="h5" align="center" onClick={props.onClick}>
        nkproveit
      </Typography>
    </a>
  );
}