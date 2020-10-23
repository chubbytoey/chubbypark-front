import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  height: 100vh;
  display: flex;
`
const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PictureProfileBlock = styled.div`
  background-color: pink;
  width: 50%;
  height: 30%;
  border-radius: 50%;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const Btn = styled.button`
  outline: none;
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  width: ${props => props.width};
  text-transform: uppercase;
`
const MenuNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`

const Menu = styled.a`
  color: #aaa;
  padding: 1.5rem 4rem;
  border: none;
  transition: 0.3s;
`
const ProfileContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`
const ProfileContainerInside = styled.div`
  background-color: #fff;
  width: 85%;
  height: 85%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
const ProfileTitle = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  padding: 4rem 4em;
  padding-bottom: 0;
`
const ProfileDetailContainer = styled.form`
  padding: 1.5rem 8rem;
`

const ProfileDetailText = styled.h4`
  flex: 1;
  padding-bottom: 0.4rem;
  padding-top: 1rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`

const InputProfileDetail = styled.input`
  outline: none;
  border: none;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  flex: 2;
  width: 80%;
  padding: 0.5rem 1rem;
  transition: 0.3s;

  &:focus {
    border: 1px solid #5d5d5d;
  }
`
const SelectProfileDetail = styled.select`
  outline: none;
  border: none;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  flex: 2;
  width: 80%;
  padding: 0.5rem 1rem;
`
const BtnContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content:flex-start;
  padding-left:20%;
  padding-top:2%;
`

function Profile() {
  function handleMenu(id, anotherID) {
    document.getElementById(id).style.color = '#000'
    document.getElementById(id).style.borderLeft = '5px solid #dd4a9e'
    document.getElementById(id).style.backgroundColor = '#f8f8f8'
    document.getElementById(anotherID).style.backgroundColor = '#fff'
    document.getElementById(anotherID).style.color = '#aaa'
    document.getElementById(anotherID).style.border = 'none'
  }
  useEffect(() => {
    handleMenu('profile', 'coin')
  }, [])
  return (
    <>
      <Navbar />
      <Content>
        <MenuContainer>
          <PictureProfileBlock />
          <Btn color="#dd4a9e" bgColor="#fff" witdh="30%">
            Choose new
          </Btn>
          <MenuNavContainer>
            <Menu id="profile" onClick={() => handleMenu('profile', 'coin')}>
              Profile
            </Menu>
            <Menu id="coin" onClick={() => handleMenu('coin', 'profile')}>
              Coin
            </Menu>
          </MenuNavContainer>
        </MenuContainer>
        <ProfileContainer>
          <ProfileContainerInside>
            <ProfileTitle>profile</ProfileTitle>
            <ProfileDetailContainer>
              <ProfileDetailText>first name</ProfileDetailText>
              <InputProfileDetail placeholder="first name" />
              <ProfileDetailText>last name</ProfileDetailText>
              <InputProfileDetail placeholder="last name" />
              <ProfileDetailText>Birth Date</ProfileDetailText>
              <InputProfileDetail type="date" />
              <ProfileDetailText>gender</ProfileDetailText>
              <SelectProfileDetail>
                <option>male</option>
                <option>female</option>
                <option>lgbt</option>
              </SelectProfileDetail>
            </ProfileDetailContainer>
            <BtnContainer>
              <Btn color="#fff" bgColor="#dd4a9e" width="25%">
                save
              </Btn>
            </BtnContainer>
          </ProfileContainerInside>
        </ProfileContainer>
      </Content>
      <Footer />
    </>
  )
}

export default Profile
