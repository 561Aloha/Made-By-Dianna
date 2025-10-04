import React, { useState, useRef } from 'react';
import './css/uxdesign.css';
import frame1 from './nature/frames/frame1.png';
import frame2 from './nature/frames/frame2.png';
import frame3 from './nature/frames/frame3.png';
import frame5 from './nature/frames/frame5.png';
import frame6 from './nature/frames/frame6.png';
import frame7 from './nature/frames/frame7.png';
import frame8 from './nature/frames/frame8.png';
import frame9 from './nature/frames/frame9.png';
import frame10 from './nature/frames/frame10.png';

const carousel = () => {

    const images = [frame1, frame2, frame3, frame5, frame6, frame7, frame8, frame9, frame10];

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        <div className='carousel-container' ref={carouselRef} style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', scrollBehavior: 'smooth' }}>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index}`} style={{ width: '250px', height: 'auto', marginRight: '20px' }} />
            ))}        </div>
    );
};

export default carousel;
