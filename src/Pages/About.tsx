import React from 'react';
import '../Styling/About.css';
import Button from '../Components/Tools/Button';

const About: React.FC = () => {
    return(
        <div className="project2-container">
            <h1 className="project2-title">About Me</h1>
            <div className="project2-content">
                <p className="project2-description">This is the description of project 2</p>
                <Button text="View Project" onClick={() => {}}/>
            </div>
        </div>
    );
};

export default About;