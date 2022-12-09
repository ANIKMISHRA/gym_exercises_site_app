// Npm packages
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

// Material ui components
import { Box } from "@mui/material";

// utils 
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  // states
  const [exerciseDetail, setExericseDetail] = useState({});
  const [exerciseVideos, setExcerciseVideos] = useState([]);
  const [targetMusclesExcercises, setTargetMusclesExcercises] = useState([])
  const [equipmentExcercises, setEquipmentExcercises] = useState([])

  const { id } = useParams();

  /**
   * Component Did Mount
   */
  useEffect(() => {
    const fetchExcercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExericseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExcerciseVideos(exerciseVideosData.contents);


      const targetMusclesExcercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMusclesExcercises(targetMusclesExcercisesData);


      const equipmentExcercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExcercises(equipmentExcercisesData);
    }

    fetchExcercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMusclesExcercises={targetMusclesExcercises}
      equipmentExcercises={equipmentExcercises} />
    </Box>
  )
}

export default ExerciseDetail;