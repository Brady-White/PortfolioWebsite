import React from 'react';
import logo from '../Components/Images/logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Projects from './Projects';
import Skills from './Skills';
import Header from '../Components/Tools/Header';
import TextSwap from './TextSwap';
import '../Styling/App.css';
import Project2 from './Project2';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/TextSwap" element={<TextSwap />} />
        <Route path="/Project2" element={<Project2 />} />
      </Routes>
    </Router>
  );
}

export default App;
