import { useState, useEffect, useRef } from 'react'
import { useData } from '../utils/useLocation'

export function useFilter () {
  const [isFloor, setIsFloor] = useState(false)
  const [selected, setSelected] = useState('')
  const [floorInput, setFloorInput] = useState('')

  // GET LOCATION
  const handleLocation = e => {
    setSelected(e.value)
  }
  // GET FLOOR
  const handleFloor = e => {
    try {
      setFloorInput(e.value)
      setIsFloor(true)
    } catch (error) {
      setIsFloor(false)
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
    getLocation()
    if (selected) {
      onClear()
      getFloors()
    }
  }, [selected])

  useEffect(() => {
    if (isFloor === true) {
      getLots()
    }
  }, [isFloor])

  // SET OPTION
  const placeOptions = locations.map(location => ({
    value: location.location_id,
    label: location.location_name
  }))
  const floorOption = floors.map(floor => ({ value: floor, label: floor }))

  return [
    {
      placeOptions,
      floorOption,
      selected,
      lots,
      isLoading,
      error,
      selectInputRef
    },
    { handleLocation, handleFloor }
  ]
}
