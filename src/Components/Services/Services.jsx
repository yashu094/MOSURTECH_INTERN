import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <hr />
      <div className="services-wrapper" data-aos="fade-up">
        <div className="service-card card1">
          <h2>Virtual Augmentation Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.</p>
          <button>Avail Now</button>
        </div>
        <div className="service-card card2">
          <h2>Digital Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.</p>
          <button>Avail Now</button>
        </div>
        <div className="service-card card3">
          <h2>Advisory Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.</p>
          <button>Avail Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
