import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
/* global fetch */
async function fetchCustomer (id) {
  const response = await fetch(`http://127.0.0.1:3333/api/v1/Customers/${id}`)

  return response.json()
}

function useCustomer (customerId) {
  // SET STATE
  const [customer, setCustomer] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  //  USE LOCATION DATA
  async function getCustomer () {
    try {
      setLoading(true)
      const customerResponse = await fetchCustomer(customerId)
      setCustomer(...customerResponse.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  // RETURN DATA
  return [{ customer, isLoading, error }, { getCustomer }]
}

const Text = styled.div`
  font-size:20px;
`

function Promotion () {
  const [{ customer, isLoading, error }, { getCustomer }] = useCustomer(17)
  useEffect(() => {
    getCustomer()
  }, [])

  if (!isLoading) {
    return (
      <>
        <Text>{customer.first_name}</Text>
      </>
    )
  }
  return (
    <>
      <div>{error}</div>
    </>
  )
}
export default Promotion
