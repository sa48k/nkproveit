import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField';
import { motion, AnimatePresence } from "framer-motion"
import Avatar from "@material-ui/core/Avatar";
import Score from './Score.js';
import HeroUpload from './HeroUpload.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(32),
    fontWeight: theme.typography.fontWeightLight,
  },
}));

export default function Quiz(props) {
  const classes = useStyles();
  const [questionData, setQuestionData] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const url = 'http://127.0.0.1:5000/y3/numseq4';

  useEffect(() => {
    axios.get(url).then((response) => {
    setQuestionData(response.data);
    })
  }, []);
  console.log(questionData);

  // var questions = questionData.questions;

  function Question(props) {
    return (
      <div>
        <Typography className={classes.heading}>
          Question {currentQuestion+1}{questionData && (' of ' + questionData['questions'].length)}
        </Typography>
        <br />
        <Typography align="left" variant="body2">
          {questionData && questionData['questions'][currentQuestion].qtext}
        </Typography>
        <br />
      </div>
    )
  }

  function AnswerForm(props) {
    const [answer, setAnswer] = useState();

    function handleChange(e) {
      setAnswer(e.target.value);
    }

    function handleSubmit(e) {
      if (answer === questionData['questions'][currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion+1 < questionData['questions'].length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
      e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
          <TextField autoFocus size="small" value={answer} onChange={handleChange} id="outlined-basic" label="Answer" variant="outlined" />
          <Button type="submit" variant="contained" color="primary" size="normal">Go</Button>
        </form>
    );
  }

  function CardBody(props) {
    const body = 
      showScore ? 
        <>
          <Score score={score} max={questionData['questions'].length} time={13}/>
          <br />
          <HeroUpload />
        </>
      : 
        <>
          <Question {...props} />
          <br />
          <AnswerForm />
        </>
    return (
      <div>
          {body}
      </div>
    );
  }

  return (
    <Card elevation={2}>
      <CardContent>
        <Typography align="center" variant="body1">
          <h4>Y{questionData.year}: {questionData.goaltext}</h4>
        </Typography>
        <CardBody />
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
    );
}