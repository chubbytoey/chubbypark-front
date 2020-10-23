import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import PasswordIcon from '../assets/password-icon.png'
import UsernameIcon from '../assets/username-icon.png'
import { Icon } from '../components/IconLayout'

/* global fetch */

const Content = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background:#fff; */
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
  height: 25rem;
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
  flex: 1;
`

const SigninInputBlockSec = styled.div`
  width: 19rem;
  height: 3rem;
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
const SigninSelect = styled.select`
  flex: 1;
  border: #aaa solid 1px;
  border-radius: 5px;
  margin: 0.4rem 0;
  margin-left: 0.3rem;
  padding: 0.5rem 1rem;
  display: flex;
`
const SigninOption = styled.option``

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

function Signup(event) {
  function CheckLogin() {
    const tokenTest = window.localStorage.getItem('storeToken')
    if (tokenTest !== null) {
      window.location.assign('/')
    } else {
      console.log('not login')
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  async function RegisterAccount(event) {
    event.preventDefault()
    const accountDataform = {
      username: username,
      password: password,
      status: 'customer',
      first_name: firstname,
      last_name: lastname,
      age: age,
      gender: gender
    }
    const accountResponse = await fetch(
      'http://127.0.0.1:3333/api/v1/registers',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountDataform)
      }
    )
    const result = await accountResponse.json()
    console.log(accountDataform)
    console.log(result)
  }
  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  const handleFirstnameChange = event => {
    setFirstname(event.target.value)
  }
  const handleLastnameChange = event => {
    setLastname(event.target.value)
  }
  const handleAgeChange = event => {
    setAge(event.target.value)
  }
  const handleGenderChange = event => {
    const value = document.getElementById('selectValue')
    setGender(value.value)
  }
  // useEffect(() => {}, [RegisterAccount])
  return (
    <>
      <Navbar />
      <Content>
        <SignInWrapper>
          <SideButton as="a">
            <SideText>SIGN IN</SideText>
          </SideButton>
          <SigninBlock>
            <SigninBlockLayout onSubmit={RegisterAccount}>
              <SigninBlockTitle>sign up</SigninBlockTitle>

              <SigninInputBlock>
                <SigninInput
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="username"
                />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="password"
                />
                <Icon src={PasswordIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput
                  type="text"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  placeholder="first name"
                />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput
                  type="text"
                  value={lastname}
                  onChange={handleLastnameChange}
                  placeholder="last name"
                />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlockSec>
                <SigninInputBlock>
                  <SigninInput
                    value={age}
                    onChange={handleAgeChange}
                    type="number"
                    placeholder="age"
                  />
                </SigninInputBlock>
                <SigninSelect id="selectValue" onChange={handleGenderChange}>
                  <SigninOption selected disabled hidden>
                    Choose here
                  </SigninOption>
                  <SigninOption value="male">male</SigninOption>
                  <SigninOption value="female">female</SigninOption>
                  <SigninOption value="lgbt">lgbt</SigninOption>
                </SigninSelect>
              </SigninInputBlockSec>

              <SigninButton type="submit">SIGN UP</SigninButton>
            </SigninBlockLayout>
          </SigninBlock>
        </SignInWrapper>
      </Content>
      <Footer />
    </>
  )
}
export default Signup
