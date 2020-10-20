import React from 'react'
import styled from 'styled-components'
import LocationField from './LocationField'
const ParkingContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ParkingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ParkingMap = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  width: 80vw;
  height: 60vh;
`
const ParkingFilter = styled.div`
  height: 6vh;
  width: 75vw;
  display: flex;
  justify-content: space-between;
`
const MapFilter = styled.div`
  

  width: 40vw;
  display:flex;
  align-items:center;
  
  
`

const MapStatus = styled.div`
  background-color: #fff;

  width: 20vw;
  border-radius: 1rem 1rem 0 0;
`

function ParkingContent () {
  return (
    <ParkingContainer>
      <ParkingWrapper>
        <ParkingFilter>
          <MapFilter>

            <LocationField />
          </MapFilter>
          <MapStatus />
        </ParkingFilter>
        <ParkingMap />
      </ParkingWrapper>
    </ParkingContainer>
  )
}
export default ParkingContent
