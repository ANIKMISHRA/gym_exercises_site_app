// Npm packages
import React from 'react'

// Material ui components
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMusclesExcercises, equipmentExcercises }) => {
  return (
     <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>
        Excercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative'}}>
        {targetMusclesExcercises.length ?
         <HorizontalScrollbar data={targetMusclesExcercises} />
        : <Loader />
        }
      </Stack>
      <Typography variant='h3' mb={5}>
        Excercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative'}}>
        {equipmentExcercises.length ?
         <HorizontalScrollbar data={equipmentExcercises} />
        : <Loader />
        }
      </Stack>
     </Box>
  )
}

export default SimilarExercises