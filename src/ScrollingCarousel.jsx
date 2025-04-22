// ScrollingCarousel.jsx
import React from 'react';
import './ScrollingCarousel.css'; // Add styles here or inline
import premier from '/src/techstack/premierepro-original.svg';
import java from '/src/techstack/java-original-wordmark.svg';
import reactjs from '/src/techstack/react-original-wordmark.svg' ;
import python from '/src/techstack/python-original-wordmark.svg';
import jira from '/src/techstack/jira-original-wordmark.svg';
import mySQL from '/src/techstack/mysql-original-wordmark.svg';
import mongodb from '/src/techstack/mongodb-plain-wordmark.svg';
// import html from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s'
import javascript from '/src/techstack/javascript-original.svg';
import visualstudio from '/src/techstack/vscode-original.svg';
import blender from '/src/techstack/blender-original.svg';


const logos = [
  { name: 'Photoshop', src: 'https://framerusercontent.com/images/3SIrHskhdN3KIZ9yST4cHFoDFoE.png' },
  { name: 'Illustrator', src: 'https://framerusercontent.com/images/Sjz2Y8xaD3oOnEnL8N14lc76MUw.png' },
  { name: 'After Effects', src: 'https://framerusercontent.com/images/W8s44eFSuDPV2bf1pIBLHJ4R8.png' },
  { name: 'Figma', src: 'https://framerusercontent.com/images/FH1BjO4xxiAytzz8NNz4BCd4Xw.png' },
  { name: 'Premier Pro', src: {premier}},
  { name: 'Java', src:{java} },
  { name: 'ReactJS', src: {reactjs}},
  { name: 'Python', src: {python} },
  { name: 'Jira', src:{jira} },
  { name: 'MySQL', src: {mySQL} },
  { name: 'MongoDB', src: {mongodb} },
  { name: 'HTML/CSS', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s' },
  { name: 'Javascript', src: {javascript}},
  { name: 'Visual Studio Code', src: {visualstudio}},
  { name: 'Blender', src: {blender}},
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
