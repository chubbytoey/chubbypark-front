import React, { useContext } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import ActionContext from '../contexts/ActionContext'

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
  const {
    placeOptions,
    floorOption,
    selected,
    isLoading,
    error,
    selectInputRef,
    handleLocation,
    handleFloor
  } = useContext(ActionContext)

  const placeIndex = selected ? placeOptions.findIndex(index => index.value === selected) : ''

  // RETURN
  if (!isLoading) {
    return (
      <>
        <FilterTitle>PLACE </FilterTitle>
        <PlaceField
          label='place'
          defaultValue={placeOptions[placeIndex]}
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
