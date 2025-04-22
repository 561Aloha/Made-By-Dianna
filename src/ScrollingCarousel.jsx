// ScrollingCarousel.jsx
import React from 'react';
import './ScrollingCarousel.css'; // Add styles here or inline

const logos = [
  { name: 'Photoshop', src: 'https://framerusercontent.com/images/3SIrHskhdN3KIZ9yST4cHFoDFoE.png' },
  { name: 'Illustrator', src: 'https://framerusercontent.com/images/Sjz2Y8xaD3oOnEnL8N14lc76MUw.png' },
  { name: 'After Effects', src: 'https://framerusercontent.com/images/W8s44eFSuDPV2bf1pIBLHJ4R8.png' },
  { name: 'Figma', src: 'https://framerusercontent.com/images/FH1BjO4xxiAytzz8NNz4BCd4Xw.png' },
  { name: 'Premier Pro', src: './src/techstack/premierepro-original.svg' },
  { name: 'Java', src: '/src/techstack/java-original-wordmark.svg' },
  { name: 'ReactJS', src: '/src/techstack/react-original-wordmark.svg' },
  { name: 'Python', src: '/src/techstack/python-original-wordmark.svg' },
  // { name: 'Microsoft Azure', src: 'https://framerusercontent.com/images/3SIrHskhdN3KIZ9yST4cHFoDFoE.png' },
  { name: 'Jira', src: '/src/techstack/jira-original-wordmark.svg' },
  { name: 'MySQL', src: '/src/techstack/mysql-original-wordmark.svg' },
  { name: 'MongoDB', src: '/src/techstack/mongodb-plain-wordmark.svg' },
  { name: 'HTML/CSS', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s' },
  { name: 'Javascript', src: '/src/techstack/javascript-original.svg' },
  { name: 'Visual Studio Code', src: '/src/techstack/vscode-original.svg'},
  { name: 'Blender', src: '/src/techstack/blender-original.svg'},
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
