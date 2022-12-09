// Npm packages
import React, { useState } from 'react';

// components
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


// Material ui 
import { Box } from '@mui/material'

const Home = () => {

  // states
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
       setExercises={setExercises}
       bodyPart={bodyPart}
       setBodyPart={setBodyPart}
      />
      <Exercises 
       setExercises={setExercises}
       bodyPart={bodyPart}
       exercises={exercises}
      />
    </Box>
  )
}

export default Home