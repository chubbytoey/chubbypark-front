import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import PasswordIcon from '../assets/password-icon.png'
import UsernameIcon from '../assets/username-icon.png'
import { Icon } from '../components/IconLayout'

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

const SigninBlockLayout = styled.form`
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
    console.log(result)
    // if (result.error !== undefined) {
    if (typeof result.error !== 'undefined') {
      alert(result.error)
    } else {
      window.localStorage.setItem(
        'storeToken',
        JSON.stringify(result.access.token)
      )
      window.localStorage.setItem('username',result.username)
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
  },[window.localStorage.getItem('storeToken')])
  return (
    <>
      <Navbar />
      <Content>
        <SignInWrapper>
          <SideButton as="a" onClick={GoSignUp}>
            <SideText>SIGN UP</SideText>
          </SideButton>
          <SigninBlock>
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
