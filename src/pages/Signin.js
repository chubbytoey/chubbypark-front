import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import PasswordIcon from '../assets/password-icon.png'
import UsernameIcon from '../assets/username-icon.png'
import { Icon } from '../components/IconLayout'
import {
  Content,
  SignInWrapper,
  SideButton,
  SideText,
  SigninBlock,
  SigninBlockLayout,
  SigninBlockTitle,
  SigninInputBlock,
  SigninInput,
  SigninButton
} from '../components/AuthLayout'

/* global fetch */
async function FetchResponse(accountDataform) {
  const accountResponse = await fetch('http://127.0.0.1:3333/api/v1/logins', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accountDataform)
  })
  return accountResponse.json()
}

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

function Signin() {
  const tokenTest = window.localStorage.getItem('storeToken')
  function checkLogin() {
    tokenTest !== null ? window.location.assign('/') : console.log('not login')
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function SigninAccount(event) {
    event.preventDefault()
    const accountDataform = {
      username: username,
      password: password
    }
    setPassword('')
    setUsername('')
    const result = await FetchResponse(accountDataform)
    // if (result.error !== undefined) {
    if (typeof result.error !== 'undefined') {
      alert(result.error)
    } else {
      window.localStorage.setItem(
        'storeToken',
        JSON.stringify(result.access.token)
      )
      window.localStorage.setItem('username', result.username)
      window.location.assign('/')
      // window.open('/')
    }
  }

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  function GoSignUp() {
    window.location.assign('/signup')
  }

  useEffect(() => {
    checkLogin()
  }, [window.localStorage.getItem('storeToken')])
  return (
    <>
      <Navbar />
      <Content height='67'>
        <SignInWrapper>
          <SideButton as="a" onClick={GoSignUp}>
            <SideText>SIGN UP</SideText>
          </SideButton>
          <SigninBlock height='17'>
            <SigninBlockLayout onSubmit={SigninAccount}>
              <SigninBlockTitle>sign in</SigninBlockTitle>

              <SigninInputBlock>
                <SigninInput
                  value={username}
                  required
                  onChange={handleUsernameChange}
                  placeholder="username"
                />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput
                  value={password}
                  required
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="password"
                />
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
