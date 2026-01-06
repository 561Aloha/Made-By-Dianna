// ScrollingCarousel.jsx
import React from 'react';
import './ScrollingCarousel.css'; // Add styles here or inline
import premier from "/src/assets/techstack/premierepro-original.svg";
import java from '/src/assets/techstack/java-original-wordmark.svg';
import reactjs from '/src/assets/techstack/react-original-wordmark.svg' ;
import python from "/src/assets/techstack/python-original-wordmark.svg";
import jira from "/src/assets/techstack/jira-original-wordmark.svg";
import mySQL from "/src/assets/techstack/mysql-original-wordmark.svg";
import mongodb from "/src/assets/techstack/mongodb-plain-wordmark.svg";
import javascript from "/src/assets/techstack/javascript-original.svg";
import visualstudio from "/src/assets/techstack/vscode-original.svg";
import blender from "/src/assets/techstack/blender-original.svg";


const logos = [
  { name: 'Photoshop', src: 'https://framerusercontent.com/images/3SIrHskhdN3KIZ9yST4cHFoDFoE.png' },
  { name: 'Illustrator', src: 'https://framerusercontent.com/images/Sjz2Y8xaD3oOnEnL8N14lc76MUw.png' },
  { name: 'After Effects', src: 'https://framerusercontent.com/images/W8s44eFSuDPV2bf1pIBLHJ4R8.png' },
  { name: 'Figma', src: 'https://framerusercontent.com/images/FH1BjO4xxiAytzz8NNz4BCd4Xw.png' },
  { name: 'Premier Pro', src: premier },
  { name: 'Java', src: java },
  { name: 'ReactJS', src: reactjs },
  { name: 'Python', src: python },
  { name: 'Jira', src: jira },
  { name: 'MySQL', src: mySQL },
  { name: 'MongoDB', src: mongodb },
  { name: 'Javascript', src: javascript },
  { name: 'Visual Studio Code', src: visualstudio },
  { name: 'Blender', src: blender },
  
];

const ScrollingCarousel = () => {
  return (
    <div className="carousel-container">
      <ul className="carousel-track">
        {logos.map((logo, index) => (
          <li key={index} className="carousel-item">
            <img src={logo.src} alt={logo.name} />
          </li>
        ))}
        {logos.map((logo, index) => (
          <li key={`dupe-${index}`} className="carousel-item">
            <img src={logo.src} alt={logo.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingCarousel;
