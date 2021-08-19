import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

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
          Question {currentQuestion+1}
        </Typography>
        <br />
        <Typography align="left" variant="body2">
          {questions && questions[currentQuestion].qtext}
        </Typography>
        <br />
      </div>
    )
  }

  return (
    <Card elevation={3}>
      <CardContent>
        <Question {...props} />
      </CardContent>
      <CardActions>
        <Button size="small">Next</Button>
      </CardActions>
    </Card>
    );
}