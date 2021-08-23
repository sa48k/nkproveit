import React , { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Spinner from './Spinner.js';

export default function HeroUpload() {
  const [open, setOpen] = React.useState(false);
  const [showSpinner, setShowSpinner] = React.useState(true);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  function Progress() {
    if (showSpinner) {
      return <CircularProgress />;
    }
  }

  return (
    <div>
      <Box textAlign='center'>
        <Button variant="contained" 
                startIcon=<Avatar src={"/herofavicon.png"} />
                color="warning" 
                size="normal"
                onClick={handleClickOpen}>Upload to Hero
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hero upload"}</DialogTitle>
        <DialogContent>
        <Box textAlign='center'>
          <DialogContentText id="alert-dialog-description">
            Uploading to testo.m@amesbury.school.nz
          </DialogContentText>
          <Progress />
          
                  </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}