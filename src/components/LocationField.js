import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

/* global fetch */

// GET DATA FROM LOCATION TABLE
async function fetchLocations () {
  const response = await fetch('http://localhost:3333/api/v1/reserve')

  return response.json()
}

// GET DATA FROM PARKINGLOT TABLE
async function fetchParkinglot (id) {
  const parkingLotResponse = await fetch(
    `http://localhost:3333/api/v1/reserve/${id}`
  )

  return parkingLotResponse.json()
}

// GET DATA
function useData (locationId) {
  // SET STATE
  const [locations, setLocations] = useState([])
  const [floors, setFloors] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  //  USE LOCATION DATA
  async function getLocation () {
    try {
      setLoading(true)
      const locationsResponse = await fetchLocations()
      setLocations(locationsResponse.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }
  // USE PARKINGLOT DATA
  // RETREIVE FLOOR
  async function getFloors () {
    try {
      setLoading(true)
      const lotResponse = await fetchParkinglot(locationId)
      setFloors([
        ...new Set(lotResponse.data.map(lot => lot.lot_name.split('-')[0]))
      ])
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }
  // RETURN DATA
  return [
    { locations, floors, isLoading, error },
    { getLocation, getFloors }
  ]
}

// START STYLED
const PlaceField = styled(Select)`
  width: 25vw;
  font-size: 0.8rem;
`
const FloorField = styled(Select)`
  width: 10vw;
  font-size: 0.8rem;
`

const FilterTitle = styled.h4`
  color: #fff;
  margin: 0 1vw;
`

const selectStyle = {
  control: (styles, { isFocused }) => ({
    ...styles,
    border: 0,
    boxShadow: 0
  }),
  menuList: base => ({
    ...base,
    marginTop: 5,
    marginBottom: 5
  })
}

// END STYLED

function LocationField () {
  // SET STATE
  const [state, setState] = useState(true)

  // GET LOCATION
  const [selected, setSelected] = useState('')
  const handleLocation = e => {
    setSelected(e.value)
    setState(true)
  }

  // USE DATA
  const [
    { locations, floors, isLoading, error },
    { getLocation, getFloors }
  ] = useData(selected)

  // RESET SELECTED VALUE
  const selectInputRef = useRef()
  const onClear = () => {
    selectInputRef.current.select.clearValue()
  }

  // USE EFFECT
  useEffect(() => {
    if (state === true) {
      getLocation()
      if (selected) {
        onClear()
      }
    }
    if (selected) {
      getFloors()
      setState(false)
    }
  }, [getLocation, getFloors, selected, onClear])

  // SET OPTION
  const placeOptions = locations.map(location => ({
    value: location.location_id,
    label: location.location_name
  }))
  const floorOption = floors.map(floor => ({ value: floor, label: floor }))

  // RETURN
  if (isLoading) {
    return (
      <>
        <FilterTitle>PLACE </FilterTitle>
        <PlaceField
          label='place'
          styles={selectStyle}
          options={placeOptions}
          theme={theme => ({
            ...theme,
            borderRadius: 10,
            border: 'none',
            colors: {
              ...theme.colors,
              primary25: '#FF69B4',
              primary: '#000'
            }
          })}
          onChange={handleLocation}
        />

        <FilterTitle>FLOOR </FilterTitle>
        <FloorField
          ref={selectInputRef}
          label='floor'
          styles={selectStyle}
          options={floorOption}
          theme={theme => ({
            ...theme,
            borderRadius: 10,
            border: 'none',
            colors: {
              ...theme.colors,
              primary25: '#FF69B4',
              primary: '#000'
            }
          })}
        />
      </>
    )
  }
  return <>{error}</>

  // BELOW CODE IS NOT USED
  // const [floors, setFloors] = useState('')

  // const floorOption = floors
  //   .split(',')
  //   .map(floor => ({ value: floor, label: floor }))
  // GET FLOOR
  // const handleFloor = () => {
  //   const arrFloor = [...parkingLots.map(lots => lots.lot_name)]
  //     .join()
  //     .split(',')
  //   const distinctFloor = [...new Set(arrFloor.map(lot => lot.split('-')[0]))]
  //   setFloors(distinctFloor.join())
  // }
}
export default LocationField
