import React from 'react'
import Hero from '../Herosection/Hero'
import Features from '../Features/Features'
import Services from '../Services/Services'
// import Reviews from '../Reviews/borrow-reviews'

const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <div><Hero/></div>
        <div><Features/></div>
        <div><Services/></div>
        {/* <div><Reviews/></div> */}
    </div>
  )
}

export default Home