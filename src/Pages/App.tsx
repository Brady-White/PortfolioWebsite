import React from 'react';
import logo from '../Components/Images/logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Cuteness from './Projects';
import Skills from './Skills';
import '../Styling/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Projects" element={<Cuteness />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;