import {useRoutes, useNavigate, useLocation, Link} from 'react-router-dom';
import React, { useState, useEffect} from "react";

import './App.css';
import './css/navbar.css';
import Home from './pages/home.jsx';
import Contact from './contact';
import UXDesign from './uxdesign';
import logo from './assets/logo-d.png';
import Projects from './projects';
import AboutMe from './pages/about.jsx';
import Resume from './pages/resume.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

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
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/projects/:id", element: <ProjectPage /> },
    { path: "/contact", element: <Contact /> },
    { path: "/naturesway", element: <UXDesign /> },
    { path: "/about", element: <AboutMe /> },
    { path: "/resume", element: <Resume /> },
  ]);
  return (
    <>
      <ScrollToTop />
      <main>{element}</main>
    </>
  
  )
}

export default App;
