import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import PasswordIcon from '../assets/password-icon.png'
import UsernameIcon from '../assets/username-icon.png'
import Select from 'react-select'
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

const SigninInputBlockSec = styled.div`
  width: 19rem;
  height: 3rem;
  display: flex;
`
const SigninSelect = styled(Select)`
  padding-top: 0.4rem;
  padding-left: 0.5rem;
  width: 40rem;
  font-size: 0.7rem;
`
const option = [
  {
    value: 'male',
    label: 'male'
  },
  {
    value: 'female',
    label: 'female'
  },
  {
    value: 'lgbt',
    label: 'lgbt'
  }
]

const customStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    flex: 1,
    boxShadow: 0,
    height: 40,
    border: '1px solid #aaa',
    minHeight: 43.5
  })
}

function Signup(event) {
  function CheckLogin() {
    const tokenTest = window.localStorage.getItem('storeToken')
    if (tokenTest !== null) {
      window.location.assign('/')
    } else {
      alert('not login')
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')

  async function RegisterAccount(event) {
    event.preventDefault()
    const accountDataform = {
      username: username,
      password: password,
      status: 'customer',
      first_name: firstname,
      last_name: lastname,
      birth_date: birthDate,
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
    if (!result.error) {
      // alert('hey')
      window.location.assign('/signin')
      // window.open('/')
    } else {
      alert(result.error.map(index => index.message))
    }
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
    setBirthDate(event.target.value)
  }
  const handleGenderChange = value => {
    // const value = document.getElementById('selectValue')
    setGender(value.value)
  }
  // useEffect(() => {}, [RegisterAccount])

  function GoSignIn() {
    window.location.assign('/signin')
  }

  const tokenTest = window.localStorage.getItem('storeToken')
  function checkLogin() {
    tokenTest !== null ? window.location.assign('/') : console.log('not login')
  }

  useEffect(() => {
    checkLogin()
  }, [window.localStorage.getItem('storeToken')])

  return (
    <>
      <Navbar />
      <Content height='85'>
        <SignInWrapper>
          <SideButton as="a" onClick={GoSignIn}>
            <SideText>SIGN IN</SideText>
          </SideButton>
          <SigninBlock height='25'>
            <SigninBlockLayout onSubmit={RegisterAccount}>
              <SigninBlockTitle>sign up</SigninBlockTitle>

              <SigninInputBlock>
                <SigninInput
                  type="text"
                  value={username}
                  required
                  onChange={handleUsernameChange}
                  placeholder="username"
                />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="password"
                />
                <Icon src={PasswordIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput
                  type="text"
                  required
                  value={firstname}
                  onChange={handleFirstnameChange}
                  placeholder="first name"
                />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlock>
                <SigninInput
                  type="text"
                  required
                  value={lastname}
                  onChange={handleLastnameChange}
                  placeholder="last name"
                />
                <Icon src={UsernameIcon} />
              </SigninInputBlock>
              <SigninInputBlockSec>
                <SigninInputBlock>
                  <SigninInput
                    value={birthDate}
                    required
                    onChange={handleAgeChange}
                    type="date"
                  />
                </SigninInputBlock>
                <SigninSelect
                  id="selectValue"
                  onChange={handleGenderChange}
                  label="gender"
                  options={option}
                  styles={customStyles}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 5,
                    border: 'none',
                    colors: {
                      ...theme.colors,
                      primary25: '#FF69B4',
                      primary: '#000'
                    }
                  })}
                  required
                />
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
