import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Projects from './Projects';
import Skills from './Skills';
import Header from '../Components/Tools/Header';
import TextSwap from './TextSwap';
import '../Styling/App.css';
import Project2 from './Project2';
import About from './About';
import { Toggle } from '../Components/Tools/toggle';
import Sidebar from '../Components/Tools/SideBar';
import useLocalStorage from 'use-local-storage';

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark",false);

  return (
   
    <Router>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark}
      handleChange={() => setIsDark(!isDark)}/>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/TextSwap" element={<TextSwap />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
