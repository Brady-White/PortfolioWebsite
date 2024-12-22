import React from 'react';
import '../Styling/Skills.css';
import navigate from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Tools/Button';

const Skills: React.FC = () => {
  const skills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'CSS',
    'HTML',
    'Python',
    'Java',
    'C++'
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;