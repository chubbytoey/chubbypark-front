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
const UserBlock = styled.div`
  margin-top: 0.2rem;
  width: 5rem;
  border-radius:0 0 10px 10px;
  right: 4.8%;
  transition: 0.5s;
  display: flex;
  justify-content:center;
  flex-direction: column;
  display: none;
  background-color: #dd4a9e;
  padding-right:.2rem;
  padding-left:.2rem;
`
const UserBlockBtn = styled.a`
  border: none;
  outline: none;
  background-color:none;
  border-bottom:${props => props.border};
  padding: 0.3rem 1rem;
  color:#fff ;
  width: 50%;
  display: flex;
  flex: 1;
  cursor: pointer;
  font-weight:lighter;
  font-size:.5rem;
`

const NavbarSignin = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 2vw;
  padding: 0.1rem 2rem;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover ${UserBlock} {
    display: block;
  }
`
const NavbarTitle = styled.div`
  flex: 1;
  display: flex;
  padding-top: 5vh;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
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

const NavText = styled.div`
  display: flex;
  align-items: center;
`

function Navbar ({ name }) {
  const tokenTest = window.localStorage.getItem('storeToken')
  const [username, setUsername] = useState('')
  // const username = window.localStorage.getItem('username').slice(1, -1)
  // const username = ''

  function checkLogin () {
    if (tokenTest !== null) {
      document.getElementById('notlogin').style.display = 'none'
      setUsername(window.localStorage.getItem('username').slice(1, -1))
    } else {
      document.getElementById('button').style.display = 'none'
      document.getElementById('login').style.display = 'none'
    }
  }

  function Logout () {
    window.localStorage.removeItem('storeToken')
    window.location.reload()
  } // mockup

  useEffect(() => {
    checkLogin()
  }, [])
  return (
    <NavbarContainer>
      <NavbarTitle>
        CHUBBYPARK
        <NavbarSignin id='notlogin'>
          <NavText>
            <NavbarUserIcon src={userIcon} />
            sign in
          </NavText>
        </NavbarSignin>
        <NavbarSignin id='login'>
          <NavText>
            <NavbarUserIcon src={userIcon} />
            {username}
          </NavText>
          <UserBlock id='button'>
            <UserBlockBtn href='/profile' border='1px solid #fff'>Profile</UserBlockBtn>
            <UserBlockBtn onClick={Logout} >logout</UserBlockBtn>
          </UserBlock>
        </NavbarSignin>
      </NavbarTitle>
      <NavbarMenu>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/parkingarea'>reservation</Link>
          </li>
          <li>
            <Link to='/'>Promotion</Link>
          </li>
          <li>
            <Link to='/faq'>faq</Link>
          </li>
        </ul>
      </NavbarMenu>
    </NavbarContainer>
  )
}
export default Navbar
