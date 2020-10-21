import React from 'react'
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
// const NavbarSignin = styled.div`
//   flex: 2;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   padding: 0 2rem;
//   font-size: 0.7rem;
//   font-weight: bold;
//   text-transform: uppercase;
// `
const NavbarSignin = styled.div`
  position: absolute;
  display: flex;
  right:2vw;
  padding: 0 2rem;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  align-items: center;
`
const NavbarTitle = styled.div`
  flex: 1;
  display: flex;
  padding-top:5vh;
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

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTitle>
        CHUBBYPARK
        <NavbarSignin>
          <NavbarUserIcon src={userIcon} />
          sign in
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
