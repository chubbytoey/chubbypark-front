import React from 'react'
import FaqContent from '../components/FaqContent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Faq () {
  const tokenTest = window.localStorage.getItem('storeToken')
  tokenTest !== null ? console.log('login') : console.log('not login') // forChecklogin
  return (
    <>
      <Navbar />
      <FaqContent />
      <Footer />
    </>
  )
}
export default Faq
