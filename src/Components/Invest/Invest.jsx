import React from "react";
import { useEffect } from "react";
import Invhead from "./Invhead";
import Invcenter from "./Invcenter"
import Invfoot from "./Invfoot";
import aos from 'aos';
import 'aos/dist/aos.css';
import "./invest.css";
import Reviews from "../Reviews/borrow-reviews";
import FaqComponent from "../Faq/borrow-faq";
const Invest = () => {
  useEffect(() => {
    aos.init({duration:2000})
},[]);
  return (
    <>
    <Invhead/>
    <Invcenter />
    <Invfoot />
    <Reviews/>
    <FaqComponent/>
  </>
  );
};

export default Invest;
