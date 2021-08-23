import React , { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createTheme } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

import Header from './Header.js';
import YearMenu from './YearMenu.js';
import YearGoals from './YearGoals.js';
import Quiz from './Quiz.js';

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

export default function App() {
  const [yearmenu, setYearmenu] = useState(false);
  const [goalsmenu, setGoalsMenu] = useState(true);
  const [showquiz, setShowQuiz] = useState(false);
  const [goalsYear, setGoalsYear] = useState(3);
  
  function handleYearClick (e) {
    setYearmenu(false);
    setGoalsMenu(true);
    setGoalsYear(e.currentTarget.id);
  }

  function handleGoalClick (e) {
    if (e.currentTarget.id ==="5") {
      setGoalsMenu(false);
      setShowQuiz(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Header onClick={() => {setYearmenu(true); setGoalsMenu(false); setShowQuiz(false);}} />
        
        {yearmenu && 
          <AnimatePresence>
            <motion.div key="yrmenu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <YearMenu handleYearClick={handleYearClick} />
            </motion.div>
          </AnimatePresence>
        }
        {goalsmenu && 
          <AnimatePresence>
            <motion.div key="acc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <YearGoals year={goalsYear} handleGoalClick={handleGoalClick}/>
           </motion.div>
         </AnimatePresence>
        }
        {showquiz && 
          <AnimatePresence>
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Quiz />
           </motion.div>
         </AnimatePresence>
        }
      </Container>
    </ThemeProvider>
  );
};
