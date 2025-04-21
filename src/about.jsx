import React from "react";
import me from './assets/me.jpeg';
import instagram from "./assets/instagram-b.png"
import linkedin from "./assets/linkedin-b.png"
import github from "./assets/github-b.png"
import './app.css'
function AboutMe() { 

    return(
        <>
        <h3>Hey there, my name is Dianna, a recent college graduate at Florida Atlantic University.
            I like designing and building things. Right now, I'm currently helping to build 
            Islamic Psychologys new website.<br/>

            In my free time, I enjoy hanging out with my bird, bingeing on a new tv series, and tending to my plants 
            I do reading, baking, and digital art, but not as consistent as I want to.<br/>

            I'm current studying to become a better programmer, applying for my first software dev position, and
            learning more about computer vision for a new ai project I am working on.
        </h3>
        <img className='me' src={me}></img>

        <h1>Services</h1>
        <ul>Website Design</ul>
        <ul>UX/UI Design</ul>
        <ul>Social</ul>
        <h1>Connect</h1>
            <div className="social">
                <img src={instagram}></img>
                <img src={linkedin}></img>
                <img src={github}></img>
            </div>
        </>
    )
}

export default AboutMe;