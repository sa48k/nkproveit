import React from 'react';
import Typography from '@material-ui/core/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';

export default function Score(props) {
  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(32),
    fontWeight: theme.typography.fontWeightLight,
  },
}));
  const classes = useStyles();
    const stars = [...Array(props.score)].map((e, i) => <StarIcon color="primary"/>)

    return ( 
      <div>
        <Typography align="center" className={classes.heading}>
          {props.score} out of {props.max} in <strong>{props.time} seconds</strong>
        <br />
        <AnimatePresence> 
          <motion.div key="stars" 
              initial={{ opacity: 0, scale: 0.1}} 
              animate={{ opacity: 1, scale: 2, rotate: -360}}
              transition={{ duration: 1 }}>
            {stars}        
          </motion.div>
        </AnimatePresence>
        </Typography>
        <br />
      </div>
    );
  }