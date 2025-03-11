import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import SocialSkills from "./components/SocialSkills";
import EnglishLevel from "./components/EnglishLevel";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/social-skills" element={<SocialSkills />} />
        <Route path="/english-level" element={<EnglishLevel />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;