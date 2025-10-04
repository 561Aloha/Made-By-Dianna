import React, { useState, useEffect, useRef } from 'react';
import './uxDesign.css';
import photo1 from '/src/assets/2.png';
import photo2 from '/src/assets/3.png';
import video1 from '/src/assets/IAIP.mp4';
import photo3 from '/src/assets/4.png';
const UxHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentItemsRef = useRef([]);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Spotify Redesign & Branding',
      description: 'A personal project where I redesigned Spotify\'s user interface and focused on implementing a new feature',
      image: photo1,      
      type: 'image',
      button: 'View Project',    
      link: 'https://www.figma.com/deck/Bzbavt4OouWH6zYyLjbPau/Spotify?node-id=1-34&t=MZXpC3Lrx9Ut5pOu-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' 
    },
    {
      id: 2,
      title: 'Clinique Redesign',
      description: 'My internship at Clinique involved redesigning the product detail page to enhance user experience and align with the brand\'s aesthetic.',
      image: photo2,
      button: 'View Project',
      type: 'image',
      link: 'https://www.figma.com/deck/xUgTBAHkE1CCPVjn3loS1d/Clinique-Redesign-PDP?node-id=1-26&t=0ZuqOZSdNfvdWH8O-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
      id: 3,
      title: 'Islamic Psyschology Web Design',
      description: 'A nonprofit organization that hired me to design their website with their new brandbook',
      video: video1,
      // poster: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/680fe798787014a8faa8758c_NB-Coin-Thumbnail.webp',
      type: 'video',

      button: 'Coming soon',
      // link: 'https://figma.com' 
    },
    {
      id: 4,
      title: 'Natures way Cafe',
      description: 'My first high-fidelity prototype where I learned about UX Design from Google\'s Coursea course. A mobile application for a healthy cafe to order food and drinks.',
      image: photo3,
      // srcset: '/assets/3.png 500w, /assets/3.png 1440w',
      type: 'image',
      button: 'View Project',
      link: 'https://figma.com'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const viewportCenter = window.innerHeight / 2 + window.scrollY;
      let newActiveIndex = 0;
      let minDistance = Infinity;
      
      contentItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(viewportCenter - itemCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          newActiveIndex = index;
        }
      });

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section-wrapper_services" ref={sectionRef}>
      <div className="section-services">
        <div className="services_image-wrapper">
          <div className="services_image-scroll">
            {services.map((service, index) => (
              <a
                key={service.id}
                href={service.link}
                className={`services_image img${index + 1} ${activeIndex === index ? 'active' : ''}`}
              >
                {service.type === 'image' ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    sizes="100vw"
                    srcSet={service.srcset}
                  />
                ) : (
                  <div className="w-embed">
                    <video
                      poster={service.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="services_content">
          <div className="margin-bottom margin-xsmall">
            <div className="tagline-text">UX Design Projects</div>
          </div>

          <div className="services_content-item-wrapper">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`services_content-items ${activeIndex === index ? 'active' : ''}`}
              ref={el => contentItemsRef.current[index] = el}
              >
                <a className="services-mobile_image-wrapper"  href={service.link} >
                  {service.type === 'image' ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="services_image-mobile"
                      loading="lazy"
                      sizes="100vw"
                      srcSet={service.srcset}
                    />
                  ) : (
                    <video
                      poster={service.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="services_image-mobile"
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                  )}
                </a>

                <h4 className="heading-style-h5">{service.title}</h4>
                <div className={`services_content-wrapper ct${index + 1}`}>
                  <p className="text-size-small">{service.description}</p>
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    <button className="button-secondary">{service.button}</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UxHome;