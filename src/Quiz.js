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
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';

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
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const url = 'http://127.0.0.1:5000/y3/numseq4';

  useEffect(() => {
    axios.get(url).then((response) => {
    setQuestions(response.data);
    })
  }, []);

  function Question(props) {
    return (
      <div>
        <Typography className={classes.heading}>
        {console.log(currentQuestion)}
          Question {currentQuestion+1}{questions && '/' + questions.length}
        </Typography>
        <br />
        <Typography align="left" variant="body2">
          {questions && questions[currentQuestion].qtext}
        </Typography>
        <br />
      </div>
    )
  }

  function Score(props) {
    return (
      <Typography align="center" className={classes.heading}>
        Score: {score} out of {questions.length}
      </Typography>
    );
  }

  function HeroUpload(props) {
    return (
      <Box textAlign='center'>
        <Button variant="contained" color="warning" size="normal">Upload to Hero</Button>
      </Box>
    );
  }

  function AnswerForm(props) {
    const [answer, setAnswer] = useState();

    function handleChange(e) {
      setAnswer(e.target.value);
    }

    function handleSubmit(e) {
      if (answer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion+1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
      e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
          <TextField size="small" value={answer} onChange={handleChange} id="outlined-basic" label="Answer" variant="outlined" />
          <Button type="submit" variant="contained" color="primary" size="normal">Go</Button>
        </form>
    );
  }

  function CardBody(props) {
    const body = showScore ? 
      <><Score />
      <br />
      <HeroUpload /></>
        : 
      <><Question {...props} />
      <br />
      <AnswerForm /></>
    return (
      <div>
          {body}
      </div>
    );
  }

  return (
    <Card elevation={3}>
      <CardContent>
       
          <CardBody />
       
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
    );
}