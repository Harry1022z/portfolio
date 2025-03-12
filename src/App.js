import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import SocialSkills from "./pages/SocialSkills/SocialSkills";
import EnglishLevel from "./pages/EnglishLevel/EnglishLevel";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/social-skills" element={<SocialSkills />} />
          <Route path="/english-level" element={<EnglishLevel />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;