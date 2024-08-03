import React,{useEffect} from 'react';
import './heroSection.css';
import heroImg from '../Bherosection/hero-Img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(()=>{
        AOS.init({duration: 2000,})},[]);
  return (
    <section className="hero-section" data-aos="fade-up">
      <div className="hero-content">
        <h1>Borrow @ ZERO Cost*</h1>
        <h2>If you have money, there's an ATM. Otherwise, IL<sup>TM</sup></h2>
        <p><a href="#!" className="hero-link">Enjoy Loan. Not a Liability!</a></p>
        <p>As every need/dream is unique; so should be your loan. In short, your loan should be so flexible that it gives you the freedom to withdraw money anytime for as small as Rs.1000 for as min. as 1 day (loan tenure), costs you for what you have consumed and without any strings/conditions.</p>
        <p>We are a 24*7 on-demand P2P unsecured loan platform for your personal, educational, and business needs. It is designed to suit every Indian to incentivize for every pre-payment while respecting your privacy. A trusted partner that stands with you, when you need it; the most!</p>
        <p>So, next time when you have no money to withdraw from an ATM, just click IL!</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get started now</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
