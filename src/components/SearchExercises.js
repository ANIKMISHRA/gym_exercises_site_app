// Npm packages
import React, { useState, useEffect } from "react";

// components
import HorizontalScrollbar from "./HorizontalScrollbar";


// utils components
import { exerciseOptions, fetchData } from "../utils/fetchData";

// Material ui components
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

/**
 * Method to handle the search related exercises.
 * @returns node
 */
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // States
  const [search, setSearch] = useState("");
  const [ bodyParts, setBodyParts] = useState([]);

  /**
   * Component did mount
   */
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])

  /**
   * Method to handle Search on Click.
   */
  const handleSearch = async () => {  
    if(search) {
       const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

       const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
       )
       
       setSearch('');
       setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="70px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{
        position:'relative', width: '100%', p: '15px'
      }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
          setBodyPart={setBodyPart} isBodyParts
         />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
