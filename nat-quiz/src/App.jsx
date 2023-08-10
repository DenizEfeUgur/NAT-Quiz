/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AllgemeinQuiz from "./components/pages/AllgemeinQuiz";
import FlaggenQuiz from "./components/pages/FlaggenQuiz";
import { Main } from "./components/Main"
import { BrowserRouter as Router, Routes, Navigate, Route, BrowserRouter  } from "react-router-dom";
import TierQuiz from "./components/pages/TierQuiz";


function App() {
  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/flaggenQuiz" element={<FlaggenQuiz />} />
            <Route path="/allgemeinQuiz" element={<AllgemeinQuiz />} />
            <Route path="/tierQuiz" element={<TierQuiz />} />
          </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
