import React, { useContext } from 'react'
import styled from 'styled-components'
import ActionContext from '../contexts/ActionContext'
import Car from '../assets/car1.png'

const BlindLayer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  width: 80vw;
  height: 60vh;
  border-radius: 1rem;
  position: absolute;
`

const BlockMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  height: 55vh;

  align-content: flex-start;
`
const Block = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  font-size: 0.7rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.3rem;
  height: 4rem;
  margin: 0.6rem;
`

const Modal = styled.div`
  display: none;
  position: absolute;
  border-radius: 1rem;
  width: 80vw;
  height: 60vh;
  justify-content: center;
  align-items: center;
`

/* Modal Content */
const ModalContent = styled.div`
  background-color: #fff;
  height: 30%;
  width: 40%;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 1px 0px 13px 0px rgba(232, 64, 130, 0.75);
  display: flex;
  justify-content:flex-end;
  
  
`
const Message = styled.div`
  font-size:1.5rem;
  height: 100%;
  width: 120%;
  
  display:flex;
  justify-content:center;
  align-items:center;
`
/* The Close Button */
const Close = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  &:hover,
  :focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`

function LotMap () {
  const { lots } = useContext(ActionContext)

  // When the user clicks the button, open the modal
  function showModal () {
    document.getElementById('myModal').style.display = 'flex'
  }

  // When the user clicks on <span> (x), close the modal
  function closeModal () {
    document.getElementById('myModal').style.display = 'none'
  }

  return (
    <>
      <BlindLayer as='a' onClick={showModal} />
      <Modal id='myModal'>
        <ModalContent>
          <Close id='closeBtn' onClick={closeModal}>
            &times;
          </Close>
          <Message>PLEASE LOGIN FIRST</Message>
        </ModalContent>
      </Modal>
      <BlockMap>
        {lots.map(index => (
          <>
            <Block src={Car}>{index}</Block>
          </>
        ))}
      </BlockMap>
    </>
  )
}
export default LotMap
