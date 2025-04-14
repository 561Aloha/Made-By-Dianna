import React, { useState,useEffect} from "react";
import first  from './assets/placeholder.jpeg';
import './carousel.css';

function Carousel() {
    return(
        <>
        <h2>This is a carousel</h2>
        <div className="bigbox">
            <img src={first}/>
        </div>
        </>
    )

}

export default Carousel;