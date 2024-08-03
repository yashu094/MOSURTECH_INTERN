import React,{useEffect} from 'react';
import Slider from 'react-slick';
import './Insuranceslide.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import cli from '../../Components/Slides/creditlifeinusrance.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bank from '../../Components/Slides/bank.png'
import loan from '../../Components/Slides/loan.png'
import mortgage from '../../Components/Slides/mortgage.png'
import report from '../../Components/Slides/report.png'
import signature from '../../Components/Slides/signature.png'
import education from '../../Components/Slides/education.png'
import emi from '../../Components/Slides/emi.png'
import disability from '../../Components/Slides/disability.png'
import unemployment from '../../Components/Slides/unemployment.png'

const InsuranceSlider = () => {
    useEffect(() => {
        aos.init({duration:2000})
    },[]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    { src: loan, heading: "Loan Protection Insurance",width:"400px", height:"400px" },
    { src: cli,heading: "Credit Life Insurance" ,width:"400px", height:"400px"},
    { src: education, heading: "Payment Protection Insurance" ,width:"400px", height:"400px"},
    { src: emi, heading: "Collateral Insurance" ,width:"400px", height:"400px"},
    { src: disability, heading: "Disability Insurance" ,width:"400px", height:"400px"},
    { src: unemployment, heading: "Unemployment Insurance" ,width:"400px", height:"400px"},
    { src: mortgage, heading: "Mortgage Insurance" ,width:"400px", height:"400px"},
    { src: bank, heading: "Accidental Death Insurance" ,width:"400px", height:"400px"},
    { src: report, heading: "Insurance Quotes and Comparisons" ,width:"400px", height:"400px"},
    { src: signature, heading: "Claim Management and Processing" ,width:"400px", height:"400px"}
  ];

  return (
    <div className="InsuranceSlider" data-aos="fade-up">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <h3 className="slide-heading">{img.heading}</h3>
            <img src={img.src} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InsuranceSlider;
