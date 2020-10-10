import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  height: 70vh;
  display:flex;
  justify-content:center;
  align-items:center;
  /* background:#fff; */
`
const SigninBlock = styled.div`
  width: 30rem;
  height: 15rem;
  border-radius:10px;
  box-shadow: 2px 1px 20px #DBDBDB;
  background-color: #fff;
  display:flex;
`
const SigninBlockTitle = styled.h1``

function Signin () {
  return (
    <>
      <Navbar />
      <Content>
        <SigninBlock>
          <SigninBlockTitle>
            SIGN IN
          </SigninBlockTitle>
        </SigninBlock>
      </Content>
      <Footer />
    </>
  )
}
export default Signin
