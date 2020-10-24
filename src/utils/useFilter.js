import { useState, useEffect, useRef } from 'react'
import { useData } from '../utils/useLocation'

export function useFilter () {
  const [status, setStatus] = useState(true)
  const [isFloor, setIsFloor] = useState(false)
  const [selected, setSelected] = useState('')
  const [floorInput, setFloorInput] = useState('')

  // GET LOCATION
  const handleLocation = e => {
    setSelected(e.value)
    setStatus(true)
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
    if (status === true) {
      getLocation()
      if (floorInput) {
        onClear()
      }
    }
    if (selected) {
      getFloors()
      setStatus(false)
    }

    if (isFloor === true) {
      if (floorInput) {
        getLots()
        console.log(lots)
        setIsFloor(false)
      }
    }
  }, [
    getLocation,
    getFloors,
    getLots,
    onClear,
    lots,
    selected,
    floors,
    floorInput,
    isFloor,
    status,
    setIsFloor,
    setStatus
  ])

  // SET OPTION
  const placeOptions = locations.map(location => ({
    value: location.location_id,
    label: location.location_name
  }))
  const floorOption = floors.map(floor => ({ value: floor, label: floor }))

  return [
    { placeOptions, floorOption, selected, isLoading, error, selectInputRef },
    { handleLocation, handleFloor }
  ]
}
