import React, { useState,useEffect} from "react";
import {useRoutes, useNavigate, useLocation, Link} from 'react-router-dom';
import first  from './assets/placeholder.jpeg';
import './app.css';
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
            <Link to="/">Home</Link>
            <Link to="/projects">Software Projects</Link>
            <Link to="/uxdesign">UX Projects</Link>
            <Link to="/contact">Contact</Link>
            <div className="social">
                <img src={instagram}></img>
                <img src={linkedin}></img>
                <img src={github}></img>
            </div>
        </div>
        </div>
        </>
    )

}

export default Footer;