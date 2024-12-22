import React from 'react';
import '../Styling/Project2.css';
import navigate from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Tools/Button';

const Project2: React.FC = () => {
    return(
        <div className="project2-container">
            <h1 className="project2-title">Project 2</h1>
            <div className="project2-content">
                <p className="project2-description">This is the description of project 2</p>
                <Button text="View Project" onClick={() => {}}/>
            </div>
        </div>
    );
};

export default Project2;