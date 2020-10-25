import React, { useEffect, useState } from 'react'
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

async function fetchResponse(accountDataform) {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const accountResponse = await fetch('http://127.0.0.1:3333/api/v1/coins', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accountDataform)
  })
  return accountResponse.json()
}

async function fetchCustomer() {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const response = await fetch('http://127.0.0.1:3333/api/v1/customers/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.json()
}

const PictureProfileBlock = styled.div`
  background-color: pink;
  width: 50%;
  height: 30%;
  border-radius: 50%;
  margin-top: 3rem;
  margin-bottom: 1rem;
`
const ProfileContainerInside = styled.div`
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
const ProfileDetailContainer = styled.form`
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

function useCustomer() {
  const [customer, setCustomer] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  async function getCustomer() {
    try {
      setLoading(true)
      const customerResponse = await fetchCustomer()
      setCustomer(...customerResponse.data)
    } catch {
      setError('e')
    }
    setLoading(false)
  }

  return [{ customer, isLoading, error }, { getCustomer }]
}

function Profile() {
  // const [amount, setAmount] = useState('')

  const [{ customer, isLoading, error }, { getCustomer }] = useCustomer() // for store userData

  console.log(customer)
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

  useEffect(() => {
    handleMenu('profileMenu', 'coinMenu', 'profileBlock', 'coinBlock')
    getCustomer()
  }, [])

  return (
    <>
      <Navbar />
      <Content>
        <MenuContainer>
          <PictureProfileBlock />
          <Btn color="#dd4a9e" bgColor="#fff" witdh="30%">
            Choose new
          </Btn>
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
          <ProfileContainerInside id="profileBlock">
            <ProfileTitle>profile</ProfileTitle>
            <ProfileDetailContainer>
              <ProfileDetailText>first name</ProfileDetailText>
              <InputProfileDetail placeholder={customer.first_name} />
              <ProfileDetailText>last name</ProfileDetailText>
              <InputProfileDetail placeholder={customer.last_name} />
              <ProfileDetailText>Birth Date</ProfileDetailText>
              <InputProfileDetail type="date" />
              <ProfileDetailText>gender</ProfileDetailText>
              <SelectProfileDetail>
                <option>male</option>
                <option>female</option>
                <option>lgbt</option>
              </SelectProfileDetail>
            </ProfileDetailContainer>
            <BtnContainer>
              <Btn color="#fff" bgColor="#dd4a9e" width="25%">
                save
              </Btn>
            </BtnContainer>
          </ProfileContainerInside>

          <ProfileContainerInside id="coinBlock">
            <ProfileTitle>coin</ProfileTitle>
            <ProfileDetailContainer>
              <TextBlock>
                <Icon>
                  <MoneyDollarCircle size="1.5rem" />
                </Icon>
                {customer.coin}
              </TextBlock>
              <InputProfileDetail placeholder="insert the coin" />
            </ProfileDetailContainer>
            <BtnContainer>
              <Btn color="#fff" bgColor="#dd4a9e" width="25%">
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
