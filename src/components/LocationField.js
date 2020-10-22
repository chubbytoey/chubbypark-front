import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { useData } from '../utils/locationUtil'

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
  // GET FLOOR
  const [floorInput, setFloorInput] = useState('')

  const handleFloor = e => {
    if (state === false) {
      setFloorInput(e.value)
    }
  }

  // USE DATA
  const [
    { locations, floors, lots, isLoading, error },
    { getLocation, getFloors, getLots }
  ] = useData([selected, floorInput])

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
      if (floorInput) {
        getLots()
      }
    }
  }, [getLocation, getFloors, getLots, lots, selected, floorInput, onClear])

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
          onChange={handleFloor}
        />
      </>
    )
  }
  return <>{error}</>
}
export default LocationField
