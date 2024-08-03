import React from 'react'
import HeroSection from '../Bherosection/heroSection'
import LoansSection from '../LoanSection/loanSection'
import LoanCalculator from '../LoanCalculator/loanCalculator'
import LoanSteps from '../LoanSteps/loanSteps'
import Reviews from '../Reviews/borrow-reviews'
import FaqComponent from '../Faq/borrow-faq'

const Borrow = () => {
  return (
    <div>
        <HeroSection/>
        <LoansSection/>
        <LoanCalculator/>
        <LoanSteps/>
        <Reviews/>
        <FaqComponent/>
    </div>
  )
}

export default Borrow