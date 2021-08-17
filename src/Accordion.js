import React, { useState, useEffect } from 'react';import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function YearGoals(props) {
  const classes = useStyles();
  // const [yearLevel, setYearLevel] = useState(0);

  const url = 'http://127.0.0.1:5000/y' + props.year + '/numseq4';
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  }, []);

  function GoalButton(props) {
    return (
      <AccordionDetails>
        <Button fullWidth={true} className="big-button" variant="contained" color="primary">
          <Typography align="left" variant="body2" >
            {props.text}
          </Typography>
        </Button>
      </AccordionDetails>
    );
  }

  return (
    <div className={classes.root}>
      <h1>Year {props.year}</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>Number Identification</Typography>
        </AccordionSummary>
        <GoalButton text="Identify and write numbers to 1,000" />
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography className={classes.heading}>Number Sequence and Order</Typography>
        </AccordionSummary>
        <GoalButton text="Count forwards and say the number one, ten and a hundred after" />
        <GoalButton text="Count forwards and say the number one, ten and a hundred before" />
        <GoalButton text="Order numbers" />
        <GoalButton text="Round three-digit numbers to the nearest ten and hundred" />
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography className={classes.heading}>Place Value</Typography>
        </AccordionSummary>
        <GoalButton text="Explain the place value of hundreds" />
        <GoalButton text="Recall the number of tens and hundreds in three-digit numbers" />
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header">
          <Typography className={classes.heading}>Groupings and Basic Facts</Typography>
        </AccordionSummary>
        <GoalButton text="Recall addition facts to 20" />
        <GoalButton text="Recall subtraction facts to 20" />
        <GoalButton text="Recall groupings within 100 - multiples of 5" />
      </Accordion>
    </div>
  );
}
