import React, { useState, useEffect, useContext } from 'react'
import ActionContext from '../contexts/ActionContext'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 20px;
`

function Promotion() {
  const { customer, isLoading, error, getCustomer } = useContext(ActionContext)
  // const [{ customer, isLoading, error }, { getCustomer }] = useCustomer()
  // console.log(customer)
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
