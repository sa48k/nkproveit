import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField';

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

  function AnswerForm(props) {
    const [answer, setAnswer] = useState();

    function handleChange(e) {
      setAnswer(e.target.value);
    }

    function handleSubmit(e) {
      alert('A name was submitted: ' + answer);
      e.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
        <TextField value={answer} onChange={handleChange} id="outlined-basic" label="Answer" variant="outlined" />
        <Button variant="contained" color="primary" size="large">Go</Button>
      
      </form>
    );
  }

  return (
    <Card elevation={3}>
      <CardContent>
        <Question {...props} />
        <br />
        <AnswerForm />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">Next</Button>
      </CardActions>
    </Card>
    );
}