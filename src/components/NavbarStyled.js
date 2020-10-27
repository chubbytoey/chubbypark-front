import styled from 'styled-components'

export const NavbarContainer = styled.div`
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
export const NavbarUserIcon = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  margin: 0 0.5rem;
  width: 1.02rem;
  height: 0.91rem;
`
export const UserBlock = styled.div`
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
export const UserBlockBtn = styled.a`
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

export const NavbarSignin = styled.div`
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
export const NavbarTitle = styled.div`
  flex: 1;
  display: flex;
  padding-top: 5vh;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
`

export const NavbarMenu = styled.div`
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

export const NavText = styled.a`
  display: flex;
  align-items: center;
`