import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

export default function Quiz(props) {
  const url = 'http://127.0.0.1:5000/y3/numseq4';
  const [questions, setQuestions] = useState();  

  useEffect(() => {
    axios.get(url).then((response) => {
    setQuestions(response.data);
    })
  }, []);

  function Question(props) {

  }

  return (
    <Paper elevation={3}>
      <h1>title goes here</h1>
        
          <Question />
    </Paper>
    );
}