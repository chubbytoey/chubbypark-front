import React, { useContext } from 'react'
import styled from 'styled-components'
import ActionContext from '../contexts/ActionContext'

const BlockMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  height: 55vh;
  background-color: cyan;
  align-content: flex-start;
`
const Block = styled.div`
  background-color: crimson;
  
  width: 1.5rem;
  height: 2.5rem;
  margin: 0.5rem;
`

function LotMap () {
  const { lots } = useContext(ActionContext)

  return (
    <>
      <BlockMap>
        {lots.map(index => (
          <>
            <Block>{index}</Block>
          </>
        ))}
      </BlockMap>
    </>
  )
}
export default LotMap
