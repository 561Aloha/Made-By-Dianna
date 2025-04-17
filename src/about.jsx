import React from "react";
import me from './assets/me.jpeg';

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
        <img src={me}></img>


        <h1> still in construction</h1>
        </>
    )
}

export default AboutMe;