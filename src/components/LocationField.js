import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

/* global fetch */
async function getLocations () {
  const response = await fetch('http://localhost:3333/api/v1/reserve')

  return response.json()
}
async function getParkinglot (id) {
  const parkingLotResponse = await fetch(
    `http://localhost:3333/api/v1/reserve/${id}`
  )

  return parkingLotResponse.json()
}

function useLocation (id) {
  const [locations, setLocations] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const [parkingLots, setParkingLots] = useState([])

  async function reteiveData () {
    try {
      setLoading(true)
      const locationsResponse = await getLocations()
      setLocations(locationsResponse.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  async function getLotData () {
    try {
      setLoading(true)
      const lotResponse = await getParkinglot(id)
      setParkingLots(lotResponse.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  return [
    { locations, parkingLots, isLoading, error },
    { reteiveData },
    { getLotData }
  ]
}

const SelectField = styled(Select)`
  width: 25vw;
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

function LocationField () {
  const [
    { locations, parkingLots, isLoading, error },
    { reteiveData },
    { getLotData }
  ] = useLocation()

  const [selected, setSelected] = useState(0)

  const handleLocation = e => {
    setSelected(e.value)
    console.log(e.value)
  }

  useEffect(() => {
    reteiveData()
    getLotData(selected)
  }, [reteiveData])

  // const floor = parkingLots.map(parkingLot => ({}))

  const options = locations.map(location => ({
    value: location.location_id,
    label: location.location_name
  }))

  if (isLoading) {
    return (
      <>
        <FilterTitle>PLACE </FilterTitle>
        <SelectField
          styles={selectStyle}
          options={options}
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
      </>
    )
  }
  return <>{error}</>
}
export default LocationField
