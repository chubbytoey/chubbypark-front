import { useState } from 'react'
/* global fetch */
async function fetchCustomer () {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const response = await fetch('http://127.0.0.1:3333/api/v1/customers/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.json()
}
async function fetchAccount () {
  const token = JSON.parse(window.localStorage.getItem('storeToken'))
  const response = await fetch('http://127.0.0.1:3333/api/v1/account/data', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.json()
}
export function useCustomer () {
  // SET STATE
  const [customer, setCustomer] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  //  USE LOCATION DATA
  async function getCustomer () {
    try {
      setLoading(true)
      const customerResponse = await fetchCustomer()
      setCustomer(...customerResponse.data)
    } catch {
      setError('e')
    }
    setLoading(false)
  }

  // RETURN DATA
  return [{ customer, isLoading, error }, { getCustomer }]
}
export function useAccount () {
  // SET STATE
  const [account, setAccount] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  //  USE LOCATION DATA
  async function getAccount () {
    try {
      setLoading(true)
      const customerResponse = await fetchAccount()
      console.log(customerResponse)
      setAccount(...customerResponse.data)
    } catch {
      setError('e')
    }
    setLoading(false)
  }

  // RETURN DATA
  return [{ account, isLoading, error }, { getAccount }]
}

