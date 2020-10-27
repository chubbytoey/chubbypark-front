import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { MoneyDollarCircle } from '@styled-icons/remix-fill'
import {
  Content,
  MenuContainer,
  Btn,
  MenuNavContainer,
  Menu,
  ContentContainer
} from '../components/MenuLayout'
import ActionContext from '../contexts/ActionContext'

async function fetchCoin(amount) {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const accountResponse = await fetch('http://127.0.0.1:3333/api/v1/coins', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(amount)
  })
  return accountResponse.json()
}

async function fetchProfile(data) {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const accountResponse = await fetch(
    'http://127.0.0.1:3333/api/v1/profiles/user',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  return accountResponse.json()
}

async function fetchAccountPic(url) {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const accountResponse = await fetch(
    'http://127.0.0.1:3333/api/v1/account/picture',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(url)
    }
  )
  return accountResponse.json()
}

async function fetchPicture(fileName) {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const formData = new FormData()
  formData.append('image', fileName)
  const accountResponse = await fetch('http://127.0.0.1:3333/api/v1/assets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  })
  return accountResponse.json()
}

const PictureProfileBlock = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-color: pink;
  width: 47%;
  height: 30%;
  border-radius: 50%;
  margin-top: 3rem;
  margin-bottom: 1rem;
`
const ProfileContainerInside = styled.form`
  background-color: #fff;
  width: 85%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  height: auto;
`
const ProfileTitle = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  padding: 4rem 4em;
  padding-bottom: 0;
`
const ProfileDetailContainer = styled.div`
  padding: 1.5rem 8rem;
`
const ProfileDetailText = styled.h4`
  flex: 1;
  padding-bottom: 0.4rem;
  padding-top: 1rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`
const InputProfileDetail = styled.input`
  outline: none;
  border: none;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  flex: 2;
  width: 80%;
  padding: 0.5rem 1rem;
  transition: 0.3s;

  &:focus {
    border: 1px solid #5d5d5d;
  }
`
const SelectProfileDetail = styled.select`
  outline: none;
  border: none;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  flex: 2;
  width: 80%;
  padding: 0.5rem 1rem;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20%;
  padding-top: 2%;

  /* for fit-content */
  padding-bottom: 5rem;
`
const Icon = styled.div`
  color: #fdd756;
  padding-right: 0.5rem;
`
const TextBlock = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`
const InputBtn = styled.input`
  outline: none;
  border: none;
  /* background-color: #fff; */
  color: #dd4a9e;
  /* border: 1px solid #dd4a9e; */
  border-radius: 10px;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
`

function Profile() {
  const { customer, getCustomer, account, getAccount } = useContext(
    ActionContext
  )
  const [amount, setAmount] = useState('')
  const [firstName, setFirstName] = useState(customer.first_name)
  const [lastName, setLastName] = useState(customer.last_name)
  const [birthDate, setBirthDate] = useState(customer.birthDate)
  const [gender, setGender] = useState(customer.gender)
  const [pic, setPic] = useState('')

  async function editCoin(event) {
    event.preventDefault()
    const updateAmount = {
      amount: parseInt(amount)
    }
    await fetchCoin(updateAmount)
    setAmount('')
  }
  async function editProfile(event) {
    event.preventDefault()
    try {
      const dataProfile = {
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate,
        gender: gender
      }
      await fetchProfile(dataProfile)
      console.log(dataProfile)
      setFirstName('')
      setLastName('')
      setBirthDate('')
      setGender('')
    } catch (e) {
      console.log(e)
    }
  }
  async function editPic() {
    const result = await fetchPicture(pic)
    console.log(result.data.path)
    const data = {
      url: result.data.path
    }
    const result2 = await fetchAccountPic(data)
    console.log(result2)
    setPic('')
  }
  function handleMenu(StayMenu, anotherMenu, height) {
    document.getElementById(StayMenu).style.color = '#000'
    document.getElementById(StayMenu).style.borderLeft = '5px solid #dd4a9e'
    document.getElementById(StayMenu).style.backgroundColor = '#f8f8f8'
    document.getElementById(anotherMenu).style.backgroundColor = '#fff'
    document.getElementById(anotherMenu).style.color = '#aaa'
    document.getElementById(anotherMenu).style.border = 'none'
    const element = document.getElementById('container')
    element.scrollTop = height
  }

  const handleCoin = event => {
    setAmount(event.target.value)
  }
  const handleFName = event => {
    setFirstName(event.target.value)
  }
  const handleLName = event => {
    setLastName(event.target.value)
  }
  const handleBirthDate = event => {
    setBirthDate(event.target.value)
  }
  const handleGender = () => {
    setGender(document.getElementById('gender').value)
  }
  useEffect(() => {
    getCustomer()
    getAccount()
    handleMenu('profileMenu', 'coinMenu', 'profileBlock', 'coinBlock')
  }, [])

  useEffect(() => {
    getCustomer()
  }, [amount, setAmount, fetchCoin, fetchProfile])

  return (
    <>
      <Navbar />
      <Content>
        <MenuContainer>
          <PictureProfileBlock src={account.url} />
          {/* <BlockForm onSubmit={editPic}> */}
          <InputBtn type="file" onChange={e => setPic(e.target.files[0])} />
          <Btn
            onClick={editPic}
            type="submit"
            color="#dd4a9e"
            bgColor="#fff"
            witdh="30%">
            Choose new
          </Btn>
          {/* </BlockForm> */}
          <MenuNavContainer>
            <Menu
              id="profileMenu"
              onClick={() => handleMenu('profileMenu', 'coinMenu', 0)}>
              Profile
            </Menu>
            <Menu
              id="coinMenu"
              onClick={() => handleMenu('coinMenu', 'profileMenu', 700)}>
              Add Coin
            </Menu>
          </MenuNavContainer>
        </MenuContainer>
        <ContentContainer id="container">
          <ProfileContainerInside onSubmit={editProfile} id="profileBlock">
            <ProfileTitle>profile</ProfileTitle>
            <ProfileDetailContainer>
              <ProfileDetailText>first name</ProfileDetailText>
              <InputProfileDetail
                id="FName"
                value={firstName}
                onChange={handleFName}
                placeholder="first name"
              />
              <ProfileDetailText>last name</ProfileDetailText>
              <InputProfileDetail
                id="LName"
                value={lastName}
                onChange={handleLName}
                placeholder="last name"
              />
              <ProfileDetailText>Birth Date</ProfileDetailText>
              <InputProfileDetail
                id="bDate"
                value={birthDate}
                onChange={handleBirthDate}
                type="date"
              />
              <ProfileDetailText>gender</ProfileDetailText>
              <SelectProfileDetail
                id="gender"
                value={gender}
                onChange={handleGender}>
                <option selected disabled hidden value="">
                  select
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="lgbt">lgbt</option>
              </SelectProfileDetail>
            </ProfileDetailContainer>
            <BtnContainer>
              <Btn color="#fff" bgColor="#dd4a9e" width="25%">
                save
              </Btn>
            </BtnContainer>
          </ProfileContainerInside>

          <ProfileContainerInside onSubmit={editCoin} id="coinBlock">
            <ProfileTitle>coin</ProfileTitle>
            <ProfileDetailContainer>
              <TextBlock>
                <Icon>
                  <MoneyDollarCircle size="1.5rem" />
                </Icon>
                {customer.coin}
              </TextBlock>
              <InputProfileDetail
                value={amount}
                onChange={handleCoin}
                placeholder="insert the coin"
              />
            </ProfileDetailContainer>
            <BtnContainer>
              <Btn type="submit" color="#fff" bgColor="#dd4a9e" width="25%">
                confirm
              </Btn>
            </BtnContainer>
          </ProfileContainerInside>
        </ContentContainer>
      </Content>
      <Footer />
    </>
  )
}

export default Profile
