import React, { useState, useEffect } from 'react';
import './borrow-faq.css'; // Import the CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';

const FaqComponent = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "What is IL?",
      answer: "InnoLend(ATL) is India’s most trusted peer-to-peer (P2P) lending platform. It connects borrowers seeking quick, unsecured loans 24*7 with lenders like individuals, banks, and financial institutions. This unique feature allows us to offer fast, convenient, and cost-effective loan options entirely online to a wide range of borrowers in India."
    },
    {
      question: "How Does IL Facilitate Instant Loans?",
      answer: "IL facilitates instant loans by connecting borrowers with lenders instantly through our platform. The process is streamlined and completely online."
    },
    {
      question: "Can I Get A Loan If I Don’t Have A Good Credit Score?",
      answer: "Yes, IL considers various factors and not just the credit score to evaluate loan applications."
    },
    {
      question: "How To Get A LifeTime Membership?",
      answer: "You can get a lifetime membership by registering on our platform and opting for the lifetime membership plan."
    },
    {
      question: "How Much Time Does IL Need To Process My Loan Application?",
      answer: "IL processes loan applications instantly and aims to approve loans within 24 hours."
    },
    {
      question: "How Can I Upgrade My Membership In IL?",
      answer: "You can upgrade your membership by logging into your account and selecting the membership upgrade option."
    },
    {
      question: "What Are The Repayment Options?",
      answer: "IL offers flexible repayment options that can be tailored to your financial situation."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" data-aos="fade-up">
      <h2>FAQ</h2>
      <div className="line"></div>
      <p>It's good to ask questions</p>
      <div className="faq-list">
        {questionsAnswers.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <h3>{index + 1}. {item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
