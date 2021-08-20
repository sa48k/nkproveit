import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    fontWeight: theme.typography.fontWeightLight,
  },
}));

export default function YearGoals(props) {
  const classes = useStyles();

  function GoalButton(props) {
    return (
      <AccordionDetails>
        <Button onClick={props.handleGoalClick} id={props.id} fullWidth={true} className="big-button" variant="contained" color="primary">
          <Typography align="left" variant="body2">
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
        <GoalButton {...props} id="1" text="Identify and write numbers to 1,000" />
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography className={classes.heading}>Number Sequence and Order</Typography>
        </AccordionSummary>
        <GoalButton {...props} id="2" text="Count forwards and say the number one, ten and a hundred after" />
        <GoalButton {...props} id="3" text="Count forwards and say the number one, ten and a hundred before" />
        <GoalButton {...props} id="4" text="Order numbers" />
        <GoalButton {...props} id="5" text="Round three-digit numbers to the nearest ten and hundred" />
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography className={classes.heading}>Place Value</Typography>
        </AccordionSummary>
        <GoalButton id="6" text="Explain the place value of hundreds" />
        <GoalButton id="7" text="Recall the number of tens and hundreds in three-digit numbers" />
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header">
          <Typography className={classes.heading}>Fractions</Typography>
        </AccordionSummary>
        <GoalButton text="Identify, write and draw the symbols for most common fractions" />
        <GoalButton text="Orders fractions with like denominators" />
      </Accordion>
    </div>
  );
}
