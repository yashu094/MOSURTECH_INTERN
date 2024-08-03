import React,{useEffect} from 'react';
import './Insurance.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import InsuranceSlider from '../Slides/Insuranceslide';
import Termsandconditions from '../TermsandConditions/Termsandconditions';

const Insurance = () => {
    useEffect(() => {
        aos.init({duration:2000})
    },[]);
  return (
    <section data-aos="fade-up">
       
        <div className="Insurance-a">
    <div className="Insurance-ab">
        <div>
            <h4>Be Prepared for the Unexpected with the Power of Insurance!</h4>
            <p>Insurance is a vital cornerstone of financial security, offering a safety net that empowers individuals to face life's uncertainties with confidence. Imagine a world where unforeseen events like accidents, illnesses, or natural disasters no longer translate into crippling financial burdens. With insurance, you gain more than just a policy; you secure peace of mind, knowing that you and your loved ones are protected from unexpected hardships. It's a proactive step towards safeguarding your future, allowing you to embrace life's adventures and challenges without fear. In essence, insurance is not merely an expense; it's an investment in stability, ensuring that even in the face of adversity, you can maintain your lifestyle and focus on what truly matters.</p>
        </div>
        <img src="https://media.istockphoto.com/id/1272782617/vector/hands-protecting-family-with-two-children.jpg?s=612x612&w=0&k=20&c=0hKB5ztiXmCfnNRddfSDrjwNoTXflhc3KgBfeZCLv1o=" alt="Img is not downloaded properly"/>
    </div>
 
    </div>
    <h1 className="Insurance-h1">Claim your Insurance</h1>
    <br></br>

<br></br>

    <InsuranceSlider/>
    <Termsandconditions/>
    </section>
  )
}

export default Insurance
