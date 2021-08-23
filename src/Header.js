import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header(props) {
  return (
    <>
      <br />
      <Typography variant="h2" align="center" onClick={props.onClick}>
        Prove it!
      </Typography>
      <br />
    </>
    
  );
}