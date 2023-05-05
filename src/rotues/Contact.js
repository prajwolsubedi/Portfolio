import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideImage from '../components/SideImage'
import Form from "../components/Form"
const Contact = () => {
  return (
    <div>
      <Navbar />
      <SideImage heading="My Contacts"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact