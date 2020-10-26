import React, { useState, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user-icon.png'
import ActionContext from '../contexts/ActionContext'
import {
  NavbarContainer,
  NavbarUserIcon,
  UserBlock,
  UserBlockBtn,
  NavbarSignin,
  NavbarTitle,
  NavbarMenu,
  NavText
} from '../components/NavbarStyled'

function Navbar() {
  const { account, getAccount } = useContext(
    ActionContext
  )
  const tokenTest = window.localStorage.getItem('storeToken')
  const [username, setUsername] = useState('')

  function checkLogin() {
    if (tokenTest !== null) {
      document.getElementById('notlogin').style.display = 'none'
      setUsername(window.localStorage.getItem('username'))
    } else {
      document.getElementById('button').style.display = 'none'
      document.getElementById('login').style.display = 'none'
    }
  }

  function Logout() {
    window.localStorage.removeItem('storeToken')
    window.location.assign('/')
  } // mockup

  useEffect(() => {
    getAccount()
    checkLogin()
  }, [])
  return (
    <NavbarContainer>
      <NavbarTitle>
        CHUBBYPARK
        <NavbarSignin id="notlogin">
          <NavText href="/signin">
            <NavbarUserIcon src={userIcon} />
            sign in
          </NavText>
        </NavbarSignin>
        <NavbarSignin id="login">
          <NavText>
            <NavbarUserIcon src={userIcon} />
            {username}
          </NavText>
          <UserBlock id="button">
            <UserBlockBtn href="/profile" border="1px solid #fff">
              Profile
            </UserBlockBtn>
            <UserBlockBtn onClick={Logout}>logout</UserBlockBtn>
          </UserBlock>
        </NavbarSignin>
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
            <Link to="/promotion">Promotion</Link>
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
