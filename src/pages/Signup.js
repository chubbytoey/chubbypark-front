import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import PasswordIcon from '../assets/password-icon.png'
import UsernameIcon from '../assets/username-icon.png'
import { Icon } from '../components/IconLayout'

const Content = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background:#fff; */
`
const SigninBlock = styled.div`
  width: 28rem;
  height: 25rem;
  border-radius: 10px;
  box-shadow: 2px 1px 20px #dbdbdb;
  background-color: #fff;
`
const SigninBlockLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`

const SigninBlockTitle = styled.h1`
  font-weight: bold;
  padding: 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;
`

const SigninInputBlock = styled.div`
  border: #aaa solid 1px;
  border-radius: 5px;
  margin: 0.4rem 0;
  padding: 0.5rem 1rem;
  width: 17rem;
  display: flex;
`

const SigninInput = styled.input`
  outline: none;
  border: none;
  font-size: 0.8rem;
  flex: 1;

  &::placeholder {
    color: #aaa;
  }
`

const SigninButton = styled.button`
  border: none;
  outline: none;
  width: 19rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #d04394;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1.2rem 0;

  &:hover {
    background-color: #e04fa2;
  }
`

function Signup () {
  return (
    <>
      <Navbar />
      <Content>
        <SigninBlock>
          <SigninBlockLayout>
            <SigninBlockTitle>sign up</SigninBlockTitle>

            <SigninInputBlock>
              <SigninInput placeholder='username' />
              <Icon src={UsernameIcon} />
            </SigninInputBlock>
            <SigninInputBlock>
              <SigninInput placeholder='password' />
              <Icon src={PasswordIcon} />
            </SigninInputBlock>
            <SigninInputBlock>
              <SigninInput placeholder='first name' />
              <Icon src={UsernameIcon} />
            </SigninInputBlock>
            <SigninInputBlock>
              <SigninInput placeholder='last name' />
              <Icon src={UsernameIcon} />
            </SigninInputBlock>
            <SigninInputBlock>
              <SigninInput type='number' placeholder='age' />
            </SigninInputBlock>

            <SigninButton>SIGN UP</SigninButton>
          </SigninBlockLayout>
        </SigninBlock>
      </Content>
      <Footer />
    </>
  )
}
export default Signup
