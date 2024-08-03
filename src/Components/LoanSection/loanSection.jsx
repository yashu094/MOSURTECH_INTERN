import React,{useEffect} from 'react';
import './loanSection.css';
import pl from '../LoanSection/personal-loans.png';
import bl from '../LoanSection/business-loans.png';
import el from '../LoanSection/education-loans.png';
import cl from '../LoanSection/careerEdvancement.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LoansSection = () => {
    useEffect(()=>{
        AOS.init({duration: 2000,})},[]);
  return (
    <section className="loans-section" data-aos="fade-up">
      <h2 className="section-title">Loans You Can Borrow</h2>
      <div className="loans-container">
        <div className="loan-item">
          <img src={pl} alt="Personal loans" />
          <h3>Personal loans</h3>
          <p>(As personalized as you)</p>
        </div>
        <div className="loan-item">
          <img src={el} alt="Education loans" />
          <h3>Education loans</h3>
          <p>(Freedom of Education)</p>
        </div>
        <div className="loan-item">
          <img src={bl} alt="Business loans" />
          <h3>Business loans</h3>
          <p>(Keep Growing)</p>
        </div>
        <div className="loan-item">
          <img src={cl} alt="Career Advancement Loans" />
          <h3>Career Advancement Loans</h3>
          <p>(Unleash Potential)</p>
        </div>
      </div>
    </section>
  );
}

export default LoansSection;
