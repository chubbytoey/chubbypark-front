import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParkingContent from '../components/ParkingContent'

function ParkingArea () {
  const tokenTest = window.localStorage.getItem('storeToken')
  tokenTest !== null ? console.log('login') : console.log('not login') // forChecklogin
  return (
    <>
      <Navbar />
      <ParkingContent />
      <Footer />
    </>
  )
}
export default ParkingArea
