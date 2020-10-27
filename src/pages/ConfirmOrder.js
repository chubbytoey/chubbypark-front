import React from 'react'
import ConfirmContent from '../components/ConfirmContent'
import Navbar from '../components/Navbar'
function ConfirmOrder (props) {
  const { lotPlace, lotId, lotType, freeHour, priceHour, locationId } = props.location.state

  return (
    <>
      <Navbar />
      <ConfirmContent
        lotPlace={lotPlace}
        lotId={lotId}
        lotType={lotType}
        freeHour={freeHour}
        priceHour={priceHour}
        locationId={locationId}
      />
    </>
  )
}
export default ConfirmOrder
