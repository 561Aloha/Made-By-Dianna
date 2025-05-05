import React, { useState,useEffect} from "react";
import {useRoutes, useNavigate, useLocation, Link} from 'react-router-dom';
import first  from './assets/placeholder.jpeg';
import './App.css';
import instagram from "./assets/instagram-b.png"
import linkedin from "./assets/linkedin-b.png"
import github from "./assets/github-b.png"

function Footer() {
    return(
        <>
        <hr/>

        <div className="together">
        <div className="column-b"> 
        <h2>Get In Touch.</h2>
        <h4>Feel free to reach out if you want to collaborate with us, or simply have a chat.</h4>
        <h4>Contact@MadeByDianna.com</h4>

        </div>

        <div className="hello">
            {/* <Link to="/">Home</Link>
            <Link to="/projects">Software Projects</Link>
            <Link to="/uxdesign">UX Projects</Link>
            <Link to="/contact">Contact</Link> */}
            <div className="social">
                <Link to='https://www.instagram.com/madebydianna'><img src={instagram}></img></Link>
                <Link to='https://www.linkedin.com/diannad'><img src={linkedin}></img></Link>
                <Link to='https://www.github.com/561Aloha'>  <img src={github}></img></Link>
            </div>
        </div>
        </div>
        </>
    )

}

export default Footer;