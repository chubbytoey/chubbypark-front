import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user-icon.png'

const NavbarContainer = styled.div`
  border: none;
  outline: none;
  color: #dd4a9e;
  display: flex;
  flex-direction: column;
  height: 17vh;
  box-shadow: 2px 1px 7px #dbdbdb;
  position: relative;
  z-index: 1000;
`
const NavbarUserIcon = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  margin: 0 0.5rem;
  width: 1.02rem;
  height: 0.91rem;
`
const NavbarSignin = styled.div`
  position: absolute;
  display: flex;
  right: 2vw;
  padding: .1rem 2rem;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  align-items: center;
`
const NavbarTitle = styled.div`
  flex: 1;
  display: flex;
  padding-top: 5vh;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
`
const UserBlockBtn = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  padding:0.2rem .5rem;
  outline: 1px solid #aaa;
  color: #dd4a9e;
  width: 100%;
  display: flex;
  flex: 1;
  cursor: pointer;
`
const UserBlock = styled.div`
  width: 4rem;
  height: 2.5rem;
  position: absolute;
  bottom: 20%;
  right: 4.8%;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  display: none;

  ${NavbarSignin}:hover ~ & {
    display: flex;
  }
`

const NavbarMenu = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
  justify-content: center;

  ul {
    list-style-type: none;
  }
  li {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    display: inline;
    padding: 0 1.5rem;
    text-transform: uppercase;
  }
`

function Navbar() {
  const tokenTest = window.localStorage.getItem('storeToken')
  const [username,setUsername] = useState('')
  // const username = window.localStorage.getItem('username').slice(1, -1)
  // const username = ''

  function checkLogin() {
    if (tokenTest !== null) {
      document.getElementById('notlogin').style.display = 'none'
      setUsername(window.localStorage.getItem('username').slice(1,-1))
    } else {
      document.getElementById('login').style.display = 'none'
      document.getElementById('button').style.display = 'none'
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])
  return (
    <NavbarContainer>
      <NavbarTitle>
        CHUBBYPARK
        <NavbarSignin id="notlogin">
          <NavbarUserIcon src={userIcon} />
          sign in
        </NavbarSignin>
        <NavbarSignin id="login">
          <NavbarUserIcon src={userIcon} />
          {username}
        </NavbarSignin>
        <UserBlock id="button">
          <UserBlockBtn>Profile</UserBlockBtn>
          <UserBlockBtn>logout</UserBlockBtn>
        </UserBlock>
      </NavbarTitle>
      <NavbarMenu>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/parkingarea">reservation</Link>
          </li>
          <li>
            <Link to="/">Promotion</Link>
          </li>
          <li>
            <Link to="/faq">faq</Link>
          </li>
        </ul>
      </NavbarMenu>
    </NavbarContainer>
  )
}
export default Navbar
