import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  height:100vh;
  display:flex;

  /* for dev */
  background-color:pink;
`

const PictureProfileBlock = styled.div`
  flex:2;

  /* for dev */
  background-color:black;
`

const DetailProfileBlock = styled.div`
  flex:3;

  /*for dev */
  background-color:blue;
`
const ProfileTitle = styled.h1`
  text-transform:uppercase;
  font-weight:bold;
  font-size:2rem;
`

function Profile () {
  return (
    <>
      <Navbar />
      <Content>
        <PictureProfileBlock>d</PictureProfileBlock>
        <DetailProfileBlock>
          <ProfileTitle>profile</ProfileTitle>
        </DetailProfileBlock>
      </Content>
      <Footer />
    </>
  )
}

export default Profile