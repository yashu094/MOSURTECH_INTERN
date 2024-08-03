import React, { useEffect } from 'react';
import './VideoComponent.css';
import vid from '../Images/services.mp4';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';



const VideoComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleRegistration = () => {
    navigate('/Registration');
  };

  return (
    <div className="video-background" data-aos="fade-up">
      
      
      <video autoPlay loop muted className="video-background__video">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-background__content">
        <div className="hero-container">
          <div className="hero-container-main">
            <h1>Transform Your Finance With Us.</h1>
            <p>Empower your finance with our intuitive website. Save, invest, and achieve your goals effortlessly. Register Now!</p>
          </div>
          <button onClick={handleRegistration}>Let's Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
