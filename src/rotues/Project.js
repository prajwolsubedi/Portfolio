import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideImage from '../components/SideImage'
import PricingCard from '../components/PricingCard'
const Project = () => {
  return (
    <div>
      <Navbar />
      <SideImage heading="PROJECTS." text="Some of my projects." />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project