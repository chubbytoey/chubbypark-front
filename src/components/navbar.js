import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  border: none;
  outline: none;
  color: #cb4a94;
  display: flex;
  flex-direction: column;
  height: 20vh;
  box-shadow: 5px 1px 20px #aaa;
`
const NavbarSignin = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
  font-size: 1rem;
`
const NavbarTitle = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
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
    display: inline;
    padding: 0 1rem;
  }
`

function Navbar () {
  return (
    <NavbarContainer>
      <NavbarSignin>sign in</NavbarSignin>
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
