import { useState } from 'react'
/* global fetch */
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

export function useData ([locationId, floorId]) {
  // SET STATE
  const [locations, setLocations] = useState([])
  const [floors, setFloors] = useState([])
  const [lots, setLots] = useState([])
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
  // RETREIVE LOTS
  async function getLots () {
    try {
      setLoading(true)
      const testResponse = await fetchParkinglot(locationId)
      setLots([
        ...new Set(
          testResponse.data
            .map(lot => lot.lot_name)
            .filter(index => index.split('-')[0] === floorId)
        )
      ])
      // console.log((testResponse.data.map(lot => lot.lot_name)).filter(index => index.split('-')[0] === floorId))
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  // RETURN DATA
  return [
    { locations, floors, lots, isLoading, error },
    { getLocation, getFloors, getLots }
  ]
}
