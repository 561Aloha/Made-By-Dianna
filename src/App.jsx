import {useRoutes, useNavigate, useLocation, Link} from 'react-router-dom';
import React, { useState, useEffect} from "react";

import './App.css';
import './css/navbar.css';
import Home from './home';
import Contact from './contact';
import UXDesign from './uxdesign';
import logo from './assets/logo-d.png';
import CustomCursor from './customcusor';
import Projects from './projects';
import AboutMe from './about';

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const navigateToContact = () => {
      navigate('/#contact');
    };
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
      <nav className="navbar">
        <div><Link to="/"><img src={logo}/></Link></div>
          <div className="menu-items">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    );
}

export function Footer() {
  return (
    <nav className="navbar">
         <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/projects">Software Projects</Link>
        <Link to="/uxdesign">UX Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/naturesway">Natures Way Project</Link>
        <Link to="/cryptohustle">CryptoHustle</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </nav>
  );
}
function App() {
    const element = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "/naturesway", element: <UXDesign /> },
      { path: "/about", element: <AboutMe /> },
    ]);

  return (
    <>
      <main>{element}</main>
    </>
  
  )
}

export default App;
