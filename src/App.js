// Npm packages
import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

// Material ui
import { Box } from "@mui/material";

// Style
import './App.css';


const App = () => {
  return (
   <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
   </Box>
  )
}

export default App;
