import React from 'react'
import styled from 'styled-components'
import { MoneyDollarCircle } from '@styled-icons/remix-fill'
import Car2 from '../assets/car2.png'
import Drop from '../assets/drop.png'
import { Link } from 'react-router-dom'

const ConfirmContainer = styled.div`
  height: 83vh;
  width: 100vw;
  display: flex;
`
const InformationSide = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InfoContainer = styled.div`
  box-shadow: 0px 0px 13px 0px rgba(50, 50, 50, 0.4);
  height: 40vh;
  width: 50vw;
  border: 5px solid #dd4a9e;
  border-radius: 2rem;
  margin-bottom: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const CoinStatus = styled.div`
  font-size: 1rem;
  color: #e6b800;
  padding: 1rem;
`

const LotInfo = styled.div`
  border-bottom: 2px solid rgba(50, 50, 50, 0.2);
  border-top: 2px solid rgba(50, 50, 50, 0.2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 35vw;
`

const DataInfo = styled.div`
  font-size: 1rem;
  color: rgba(50, 50, 50);
  padding-left: 1rem;
  margin-bottom: 0.6rem;
`

const ChargeInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 35vw;
`
const InsideCharge = styled.div`
  font-size: 1.6rem;
  color: #dd4a9e;
  padding-bottom: 0.5rem;
  font-weight: bold;
`

const ButtonContainer = styled.div`
  height: 10vh;
  width: 50vw;

  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Btn = styled.div`
  height: auto;
  width: 6vw;
  padding: 1rem 5rem;
  background-color: #dd4a9e;
  border-radius: 1rem;
  color: #fff;
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
  width: 35vw;
  height: 35vh;
  background-image: url(${props => props.src});
  background-size: cover;
`

/* global fetch */
async function Reserve (lotId, locationId) {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  console.log(lotId, locationId)
  const reserveForm = {
    lot_name: lotId
  }

  const lotResponse = await fetch(
    `http://127.0.0.1:3333/api/v1/reserve/${locationId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reserveForm)
    }
  )
  return lotResponse.json()
}

function ConfirmContent ({
  lotPlace,
  lotId,
  lotType,
  freeHour,
  priceHour,
  locationId
}) {
  return (
    <>
      <ConfirmContainer>
        <ImageSide>
          <DropImage src={Drop}>{lotId}</DropImage>
          <CarImage src={Car2} />
        </ImageSide>
        <InformationSide>
          <InfoContainer>
            <CoinStatus>
              <MoneyDollarCircle size='1.5rem' /> Balance Coin :
            </CoinStatus>
            <LotInfo>
              <DataInfo>Location : {lotPlace}</DataInfo>
              <DataInfo>Parking ID : {lotId}</DataInfo>
              <DataInfo>Category : {lotType}</DataInfo>
            </LotInfo>
            <ChargeInfo>
              <InsideCharge>Free Hour : {freeHour} Hours</InsideCharge>
              <InsideCharge>Price/Hour : {priceHour} Baht/hours</InsideCharge>
            </ChargeInfo>
          </InfoContainer>
          <ButtonContainer>
            <Btn>CANCEL</Btn>
            <Link to='/check'>
              <Btn as='a' onClick={Reserve(lotId, locationId)}>
                CONFIRM
              </Btn>
            </Link>
          </ButtonContainer>
        </InformationSide>
      </ConfirmContainer>
    </>
  )
}
export default ConfirmContent
