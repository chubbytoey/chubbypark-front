import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ads1 from '../assets/ads1.jpg'
import ads2 from '../assets/ads2.jpg'
import ads3 from '../assets/ads3.jpg'

const Content = styled.div`
  height:200vh;
  width:100%;
  background:#fff;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const AdsBlock = styled.div`
  background-color:red;
  background-image:url(${props => props.src});
  background-size:cover;
  width:80%;
  height:30%;
  margin-top:1rem;
  background-position:center;
`
function Promotion() {

  return (
    <>
    <Navbar />
    <Content>
      <AdsBlock src={ads1} />
      <AdsBlock src={ads2}/>
      <AdsBlock src={ads3}/>
    </Content>
    <Footer />
    </>
  )
}
export default Promotion
