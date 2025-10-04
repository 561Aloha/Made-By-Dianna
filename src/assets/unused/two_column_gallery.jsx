import nature from "/src/assets/nature.png";
import health from "/src/assets/health.png";
import enurse from "/src/assets/enurse.png";

import './uxDesign.css';

const ProjectItems = () => {
  const mediaItems = [
    {
      type: 'image',
      src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb.avif',
      srcset: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb-p-500.avif 500w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb-p-800.avif 800w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb-p-1080.avif 1080w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb.avif 2048w',
      alt: '',
      className: 'services_image img1'
    },
    {
      type: 'image',
      src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui.avif',
      srcset: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui-p-500.avif 500w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui-p-800.avif 800w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui-p-1080.avif 1080w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui.avif 2160w',
      alt: '',
      className: 'services_image img2'
    },
    {
      type: 'video',
      src: 'https://www.dropbox.com/scl/fi/epx77q4u6hx7o1s8vk16f/Scriba-coin.mp4?rlkey=f8zjvmy9flnwggjwqlfb5eyap&st=tgr0zksv&dl=1',
      poster: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/680fe798787014a8faa8758c_NB-Coin-Thumbnail.webp',
      className: 'services_image img3 w-embed'
    },
    {
      type: 'video',
      src: 'https://www.dropbox.com/scl/fi/dnll4t6u0hjudmkoz0w49/vlge.mp4?rlkey=bs63mrb9n6typ9gquyza5l55r&st=dsjoe438&dl=1',
      poster: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/680fe9abe853f2bd033b9db3_NB-VLGE-Thumbnail.webp',
      className: 'services_image img4 w-embed'
    },
    {
      type: 'video',
      src: 'https://www.dropbox.com/scl/fi/elmovndt6i5mocmp0hk21/the-source_video-phone.mp4?rlkey=9n596vcfbiye7r7l0jer769w9&st=04yfjp86&dl=1',
      poster: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/680feb1b2e6042df619f7b4c_NB-thesource-Thumbnail.webp',
      className: 'services_image img5 w-embed'
    },
    {
      type: 'image',
      src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67912b9648a48de33e597980_webflow.avif',
      srcset: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67912b9648a48de33e597980_webflow-p-500.avif 500w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67912b9648a48de33e597980_webflow.avif 1440w',
      alt: '',
      className: 'services_image img6'
    }
  ];

  const servicesContent = [
    {
      title: 'Branding',
      description: "Your brand is more than a logo—it's how the world perceives you. I create cohesive brand identities that resonate, tell a story, and make an impact, ensuring your business stands out in competitive markets.",
      media: {
        type: 'image',
        src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb.avif',
        srcset: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb-p-500.avif 500w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb-p-800.avif 800w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb-p-1080.avif 1080w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67911f1b1c573985f750d57e_brand-nb.avif 2048w'
      },
      wrapperClass: 'ct1'
    },
    {
      title: 'UI / UX DESIGN',
      description: 'Exceptional design starts with the user. I craft intuitive interfaces and seamless experiences that not only look stunning but also drive engagement and enhance usability, putting your audience first.',
      media: {
        type: 'image',
        src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui.avif',
        srcset: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui-p-500.avif 500w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui-p-800.avif 800w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui-p-1080.avif 1080w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/6790f03b5141f14989fa3245_ux%3Aui.avif 2160w'
      },
      wrapperClass: 'ct2'
    },
    {
      title: 'ASSET PRODUCTION',
      description: 'From 3D assets, social media graphics to marketing materials, I deliver high-quality digital and physical assets tailored to amplify your brand\'s voice and support your campaigns effectively.',
      media: {
        type: 'video',
        poster: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a3e69b7886360503447eb7_Scriba-coin_01-poster-00001.jpg',
        sources: [
          { src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a3e69b7886360503447eb7_Scriba-coin_01-transcode.mp4', type: 'video/mp4' },
          { src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a3e69b7886360503447eb7_Scriba-coin_01-transcode.webm', type: 'video/webm' }
        ]
      },
      wrapperClass: 'ct3'
    },
    {
      title: 'WEB & APP design',
      description: 'I design responsive websites and applications that blend creativity with functionality, ensuring your digital presence meets your goals and keeps users engaged across all platforms.',
      media: {
        type: 'video',
        poster: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a2885fc398a1cf162d2c73_vlge-mobile-poster-00001.jpg',
        sources: [
          { src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a2885fc398a1cf162d2c73_vlge-mobile-transcode.mp4', type: 'video/mp4' },
          { src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a2885fc398a1cf162d2c73_vlge-mobile-transcode.webm', type: 'video/webm' }
        ]
      },
      wrapperClass: 'ct4'
    },
    {
      title: 'INteraction design',
      description: 'Engaging animations and micro-interactions are the secret to dynamic user experiences. I design interactions that breathe life into your digital products, keeping users intrigued and connected.',
      media: {
        type: 'video',
        poster: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a27006b205df664d999cf2_the-source_video-mobile-poster-00001.jpg',
        sources: [
          { src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a27006b205df664d999cf2_the-source_video-mobile-transcode.mp4', type: 'video/mp4' },
          { src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98%2F67a27006b205df664d999cf2_the-source_video-mobile-transcode.webm', type: 'video/webm' }
        ]
      },
      wrapperClass: 'ct5'
    },
    {
      title: 'Webflow',
      description: 'As an early adopter and expert, I bring your designs to life in Webflow, creating scalable, visually striking, and lightning-fast websites without compromising on flexibility or functionality.',
      media: {
        type: 'image',
        src: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67912b9648a48de33e597980_webflow.avif',
        srcset: 'https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67912b9648a48de33e597980_webflow-p-500.avif 500w, https://cdn.prod.website-files.com/6772f6efe246aaaa73ad2a98/67912b9648a48de33e597980_webflow.avif 1440w'
      },
      wrapperClass: 'ct6'
    }
  ];

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <div data-w-id="4b759f86-ba63-e08d-8892-8e8673c5958a" className="section-wrapper_services">
      <div className="section-services">
        {/* Services Image Wrapper */}
        <div className="services_image-wrapper">
          <div className="services_image-scroll">
            {mediaItems.map((item, index) => (
              item.type === 'image' ? (
                <img
                  key={index}
                  src={item.src}
                  srcSet={item.srcset}
                  sizes="100vw"
                  loading="lazy"
                  alt={item.alt}
                  className={item.className}
                />
              ) : (
                <div key={index} className={item.className}>
                  <video
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={videoStyle}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Services Content */}
        <div className="services_content">
          <div className="margin-bottom margin-xsmall">
            <div className="tagline-text">Services overview</div>
          </div>
          <div className="services_content-item-wrapper">
            <div className="services_content-items">
              {servicesContent.map((service, index) => (
                <div key={index} className="services_content-items">
                  <div className="services-mobile_image-wrapper">
                    {service.media.type === 'image' ? (
                      <img
                        src={service.media.src}
                        loading="lazy"
                        sizes="100vw"
                        srcSet={service.media.srcset}
                        alt=""
                        className="services_image-mobile"
                      />
                    ) : (
                      <div className="services_image-mobile w-background-video w-background-video-atom">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            backgroundImage: `url("${service.media.poster}")`,
                            objectFit: 'cover'
                          }}
                        >
                          {service.media.sources.map((source, idx) => (
                            <source key={idx} src={source.src} type={source.type} />
                          ))}
                        </video>
                      </div>
                    )}
                  </div>
                  <h4 className="heading-style-h5">{service.title}</h4>
                  <div className={`services_content-wrapper ${service.wrapperClass}`}>
                    <p className="text-size-small">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;