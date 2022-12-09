// Npm packages
import React from 'react';

// Material ui components
import { Stack, Typography } from '@mui/material';

// Assets
import Icon from '../assets/icons/gym.png';;

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
     <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '250px',
        cursor:'pointer',
        gap: '47px'
      }}
      onClick={() => { 
        setBodyPart(item)
        window.scrollTo({ Top: 1800, left: 100, behavior: 'smooth'})
      }}
     >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: "40px"}} />
      <Typography 
       fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize"      
      >{item}</Typography>
     </Stack>
  )
}

export default BodyPart