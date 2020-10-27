import React, { useState } from 'react'
import styled from 'styled-components'
import Car2 from '../assets/car2.png'
import Drop from '../assets/drop.png'
import { useStopWatch } from '../components/StopWatch'
import { Link } from 'react-router-dom'
const CheckContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageSide = styled.div`
  flex: 1.5;
  height: 100%;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const DropImage = styled.div`
  width: 10vw;
  height: 28.5vh;
  background-image: url(${props => props.src});
  background-size: cover;
  display: flex;
  font-weight: bold;
  color: #fff;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`

const CarImage = styled.div`
  width: 33vw;
  height: 33vh;
  background-image: url(${props => props.src});
  background-size: cover;
`
const Text = styled.div`
  font-size: 1.3rem;
  margin-left: 0.5rem;
  font-weight: ${props => (props.id === 'timer' ? 'normal' : 'bold')};
  color: ${props => (props.id === 'timer' ? '#000' : '#dd4a9e')};
`

const Timer = styled.div`
  display: ${props => (props.id === 'secondtext' ? 'none' : 'flex')};
  margin: 2rem;
`
const BtnContainer = styled.div`
  width: 40vw;
  height: 8vh;
  display: ${props => (props.id === 'secondlabel' ? 'none' : 'flex')};
  justify-content: space-around;
  align-items: center;
`
const CheckBtn = styled.div`
  width: auto;
  height: auto;
  padding: 1rem 4rem;
  border-radius: 0.9rem;
  color: #fff;
  background-color: ${props => (props.id === 'cancel' ? '#bdbdbd' : '#dd4a9e')};
`

const BillContainer = styled.div`
  box-shadow: 0px 0px 13px 0px rgba(50, 50, 50, 0.4);
  height: 70vh;
  width: 50vw;
  border: 5px solid #dd4a9e;
  border-radius: 2rem;
  margin-bottom: 6vh;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`
const BillTitle = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
  height: auto;
`
const BillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  border-bottom: 1px solid #000;
  margin-bottom: 1rem;
  padding: 0.7rem;
`
const BillDetail = styled.div`
  display: flex;
  height: auto;
  width: 35vw;
  padding: 0.8rem;
`
const BillItem = styled.div`
  font-size: 1rem;
  color: ${props => (props.dataType === 'content' ? '#bdbdbd' : '#dd4a9e')};
`
const Payment = styled.div`
  padding: 0.7rem 5rem 0.7rem 0.7rem;
  display: flex;
  
  
  width: 35vw;
  height: auto;
`
const PaymentItem = styled.div`
  font-size: 1.4rem;
  color: ${props => (props.dataType === 'content' ? '#bdbdbd' : '#dd4a9e')};

  font-weight: bold;
  height: auto;
`
const CompleteBtn = styled.div`
  width: auto;
  height: auto;
  padding: 1rem 4rem;
  border-radius: 0.9rem;
  color: #fff;
  background-color: #dd4a9e;
  display: none;
  justify-content: center;
  align-items: center;
`

function Check () {
  const [checkOut, setCheckOut] = useState([])

  /* global fetch */
  async function CheckIn () {
    const token = JSON.parse(window.localStorage.getItem('storeToken'))

    const checkInResponse = await fetch(
      'http://127.0.0.1:3333/api/v1/checkin',
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    return checkInResponse.json()
  }

  async function CheckOut () {
    const token = JSON.parse(window.localStorage.getItem('storeToken'))

    const checkOutResponse = await fetch(
      'http://127.0.0.1:3333/api/v1/checkout',
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    const result = await checkOutResponse.json()
    setCheckOut(result.data)

    return result
  }

  const [{ timer }, { handleStart, formatTime }] = useStopWatch()

  const timeOut = new Date()
  timeOut.setSeconds(timeOut.getSeconds() + 30)
  const timelimit =
    timeOut.getHours() +
    ' hours ' +
    timeOut.getMinutes() +
    ' minutes ' +
    timeOut.getSeconds() +
    ' seconds '

  function checkInFunc () {
    handleStart()
    CheckIn()

    document.getElementById('firsttext').style.display = 'none'
    document.getElementById('firstlabel').style.display = 'none'
    document.getElementById('secondtext').style.display = 'flex'
    document.getElementById('secondlabel').style.display = 'flex'
  }
  function checkOutFunc () {
    CheckOut()
    document.getElementById('reservecheck').style.display = 'none'
    document.getElementById('orderdetail').style.display = 'flex'
    document.getElementById('orderBtn').style.display = 'flex'
  }

  const place = checkOut.place
  const lotName = checkOut.lotName
  const free = checkOut.free
  const rate = checkOut.rate
  const type = checkOut.type
  const time = checkOut.time
  const money = checkOut.money
  const price = checkOut.price

  console.log(place)
  return (
    <>
      <CheckContainer>
        <ImageSide id='reservecheck'>
          <DropImage src={Drop} />
          <CarImage src={Car2} />
          <Timer id='firsttext'>
            <Text>Time left to check in : </Text>

            <Text id='timer'>{timelimit}</Text>
          </Timer>
          <BtnContainer id='firstlabel'>
            <CheckBtn id='cancel'>CANCEL</CheckBtn>
            <CheckBtn id='checkin' onClick={checkInFunc}>
              CHECK IN
            </CheckBtn>
          </BtnContainer>

          <Timer id='secondtext'>
            <Text>Using Time : </Text>
            <Text id='stopwatch'>{formatTime(timer)}</Text>
          </Timer>
          <BtnContainer id='secondlabel'>
            <CheckBtn id='checkout' onClick={checkOutFunc}>
              CHECK OUT
            </CheckBtn>
          </BtnContainer>
        </ImageSide>
        <BillContainer id='orderdetail'>
          <BillTitle>ORDER DETAIL</BillTitle>
          <BillWrapper>
            <BillDetail>
              <BillItem dataType='title'>Location: </BillItem>
              <BillItem dataType='content'>{place}</BillItem>
            </BillDetail>

            <BillDetail>
              <BillItem dataType='title'>Parking ID:</BillItem>
              <BillItem dataType='content'>{lotName}</BillItem>
            </BillDetail>

            <BillDetail>
              <BillItem dataType='title'>Free Hour:</BillItem>
              <BillItem dataType='content'>{free}</BillItem>
            </BillDetail>

            <BillDetail>
              <BillItem dataType='title'>Price/Hour:</BillItem>
              <BillItem dataType='content'>{rate}</BillItem>
            </BillDetail>

            <BillDetail>
              <BillItem dataType='title'>Category:</BillItem>
              <BillItem dataType='content'>{type}</BillItem>
            </BillDetail>

            <BillDetail>
              <BillItem dataType='title'>Using Hour:</BillItem>
              <BillItem dataType='content'>{time}</BillItem>
            </BillDetail>
          </BillWrapper>
          <Payment>
            <PaymentItem dataType='title'>Your coin </PaymentItem>
            <PaymentItem dataType='content'> {money} Baht</PaymentItem>
          </Payment>
          <Payment>
            <PaymentItem dataType='title'> Total Price </PaymentItem>
            <PaymentItem dataType='content'> {price} Baht</PaymentItem>
          </Payment>
        </BillContainer>
        <Link to='/'>
          <CompleteBtn as='a' id='orderBtn'>
            RETURN TO HOME
          </CompleteBtn>
        </Link>
      </CheckContainer>
    </>
  )
}
export default Check
