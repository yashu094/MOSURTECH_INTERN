import React,{useEffect} from 'react';
import Slider from 'react-slick';
import './borrow-reviews.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
  useEffect(()=>{
    AOS.init({duration: 3000});
  },[])
  
  const reviews = [
    { name: "John Doe", review: "Great service and friendly staff!" },
    { name: "Jane Smith", review: "I had an excellent experience!" },
    { name: "Michael Johnson", review: "Highly recommend to everyone!" },
    { name: "Emily Davis", review: "A seamless process from start to finish." },
    { name: "Chris Brown", review: "Professional and efficient service." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false, // Disable center mode to avoid overlap
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false, // Disable center mode to avoid overlap
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Disable center mode to avoid overlap
        },
      },
    ],
  };

  return (
    <div>
      <div className="review-heading-container">
        <h2 className="borrow-reviews-heading">User Reviews</h2>
        <div className="review-heading-underline"></div>
      </div>
      <div className="borrow-reviews-section" data-aos="fade-up">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="borrow-review-card">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
