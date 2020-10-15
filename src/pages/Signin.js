import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import PasswordIcon from '../assets/password-icon.png'
import UsernameIcon from '../assets/username-icon.png'
import { Icon } from '../components/IconLayout'

const Content = styled.div`
  height: 67vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`
const SignInWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const SideButton = styled.div`
  width: 2rem;
  height: 12vh;
  background-color: #d04394;
  position: absolute;
  margin-top: 2rem;
  border-radius: 10px 0 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #e04fa2;
  }
`
const SideText = styled.div`
  color: #fff;
  padding: 0.2rem;
  writing-mode: vertical-rl;
  font-size: 0.7rem;
  transform: rotate(180deg);
`

const SigninBlock = styled.div`
  margin: 0 2rem;
  width: 28rem;
  height: 17rem;
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

const ForgetPasswordBlock = styled.div`
  width: 19rem;
  display: flex;
  justify-content: flex-end;
`

const ForgetPassword = styled.h3`
  color: #aaa;
  font-size: 0.5rem;
  text-decoration: underline;
  text-transform: lowercase;
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

function Signin () {
  return (
    <>
      <Navbar />
      <Content>

        <SignInWrapper>
          <SideButton as='a'>
            <SideText>SIGN UP</SideText>
          </SideButton>
          <SigninBlock>
            <SigninBlockLayout>
              <SigninBlockTitle>sign in</SigninBlockTitle>

              <SigninInputBlock>
                <SigninInput placeholder='username' />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput type='password' placeholder='password' />
                <Icon src={PasswordIcon} />
              </SigninInputBlock>

              <ForgetPasswordBlock>
                <ForgetPassword>Forget Password</ForgetPassword>
              </ForgetPasswordBlock>

              <SigninButton>LOG IN</SigninButton>
            </SigninBlockLayout>
          </SigninBlock>
        </SignInWrapper>
      </Content>
      <Footer />
    </>
  )
}
export default Signin
