import React from 'react'
import styled from 'styled-components'
import userIcon from '../assets/user-icon.png'

const NavbarContainer = styled.div`
  border: none;
  outline: none;
  color: #DD4A9E;
  display: flex;
  flex-direction: column;
  height: 20vh;
  box-shadow: 2px 1px 7px #DBDBDB;
`
const NavbarUserIcon = styled.div`
  background-image: url(${props => props.src});
  background-size:cover;
  margin:0 0.5rem;
  width:1.02rem;
  height:.91rem;
`

const NavbarSignin = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items:center;
  padding: 0 2rem;
  font-size: 0.7rem;
  font-weight:bold;
  text-transform:uppercase;
`
const NavbarTitle = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
`
const NavbarMenu = styled.div`
  flex: 2;
  display: flex;
  align-items: baseline;
  justify-content: center;

  ul {
    list-style-type: none;
  }
  li {
    font-size:0.9rem;
    letter-spacing:0.05rem;
    display: inline;
    padding: 0 1.5rem;
    text-transform:uppercase;
  }
`

function Navbar () {
  return (
    <NavbarContainer>
      <NavbarSignin>
        <NavbarUserIcon src={userIcon} />
        sign in
      </NavbarSignin>
      <NavbarTitle>CHUBBYPARK</NavbarTitle>
      <NavbarMenu>
        <ul>
          <li>Home</li>
          <li>Reservation</li>
          <li>Promotion</li>
          <li>Help</li>
        </ul>
      </NavbarMenu>
    </NavbarContainer>
  )
}
export default Navbar
