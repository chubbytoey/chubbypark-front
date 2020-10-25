import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { MoneyDollarCircle } from '@styled-icons/remix-fill'
import {
  Content,
  MenuContainer,
  Btn,
  MenuNavContainer,
  Menu,
  ContentContainer
} from '../components/MenuLayout'

async function FetchResponse(accountDataform) {
  const accountResponse = await fetch('http://127.0.0.1:3333/api/v1/coins', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accountDataform)
  })
  return accountResponse.json()
}
// const Content = styled.div`
//   height: 90vh;
//   display: flex;
// `
// const MenuContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
const PictureProfileBlock = styled.div`
  background-color: pink;
  width: 50%;
  height: 30%;
  border-radius: 50%;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

// const Btn = styled.button`
//   outline: none;
//   border: none;
//   background-color: ${props => props.bgColor};
//   color: ${props => props.color};
//   border: 1px solid ${props => props.color};
//   border-radius: 10px;
//   padding: 0.5rem 1rem;
//   width: ${props => props.width};
//   text-transform: uppercase;
//   cursor: pointer;
// `
// const MenuNavContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   margin-top: 15%;
// `

// const Menu = styled.a`
//   color: #aaa;
//   padding: 1.5rem 4rem;
//   border: none;
//   transition: 0.3s;
// `
// const ProfileContainer = styled.div`
//   flex: 2;
//   display: flex;
//   background-color: #f8f8f8;
//   align-items: center;
//   flex-direction: column;
//   height: 100%;
//   overflow: auto;
//   scroll-behavior:smooth;
//   /* for fit-content */
//   /* align-items: flex-start; */
//   /* padding-top:3rem; */
// `
const ProfileContainerInside = styled.div`
  background-color: #fff;
  width: 85%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  height: auto;
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
  justify-content: flex-start;
  padding-left: 20%;
  padding-top: 2%;

  /* for fit-content */
  padding-bottom: 5rem;
`
const Icon = styled.div`
  color: #fdd756;
  padding-right: 0.5rem;
`
const TextBlock = styled.div`
  /* border:1px solid red; */
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`
function Profile() {
  const [amount,setAmount] = useState('')

  function handleMenu(StayMenu, anotherMenu, height) {
    document.getElementById(StayMenu).style.color = '#000'
    document.getElementById(StayMenu).style.borderLeft = '5px solid #dd4a9e'
    document.getElementById(StayMenu).style.backgroundColor = '#f8f8f8'
    document.getElementById(anotherMenu).style.backgroundColor = '#fff'
    document.getElementById(anotherMenu).style.color = '#aaa'
    document.getElementById(anotherMenu).style.border = 'none'
    // const element = document.getElementById('profileBlock')
    // console.log(element)
    // const element2 = document.getElementById('coinBlock')
    // element.scrollTop = element2.offsetTop
    // element.scrollTop = 10
    const element = document.getElementById('container')
    element.scrollTop = height
  }

  // function handleCoin() {
  //   event.preventDefault()
  //   const accountDataform = {
  //     user_rate: amount
  //   }
  //   setAmount('')
  //   const result = await FetchResponse(accountDataform)
  // }
  useEffect(() => {
    handleMenu('profileMenu', 'coinMenu', 'profileBlock', 'coinBlock')
    // handleMenu('coinMenu', 'profileMenu', 'coinBlock', 'profileBlock')
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
            <Menu
              // href="#profileBlock"
              id="profileMenu"
              onClick={() => handleMenu('profileMenu', 'coinMenu', 0)}>
              Profile
            </Menu>
            <Menu
              // href="#coinBlock"
              id="coinMenu"
              onClick={() => handleMenu('coinMenu', 'profileMenu', 700)}>
              Add Coin
            </Menu>
          </MenuNavContainer>
        </MenuContainer>
        <ContentContainer id="container">
          <ProfileContainerInside id="profileBlock">
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

          <ProfileContainerInside id="coinBlock">
            <ProfileTitle>coin</ProfileTitle>
            <ProfileDetailContainer>
              <TextBlock>
                <Icon>
                  <MoneyDollarCircle size="1.5rem" />
                </Icon>
                999999
              </TextBlock>
              <InputProfileDetail placeholder="insert the coin" />
            </ProfileDetailContainer>
            <BtnContainer>
              <Btn color="#fff" bgColor="#dd4a9e" width="25%">
                confirm
              </Btn>
            </BtnContainer>
          </ProfileContainerInside>
        </ContentContainer>
      </Content>
      <Footer />
    </>
  )
}

export default Profile
