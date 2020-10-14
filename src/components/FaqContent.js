import React, { useState } from 'react'
import styled from 'styled-components'

const FaqContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #000;
  overflow: scroll;
`
const FaqWrapper = styled.div`
  display: flex;
`
const QuestionSide = styled.ul`
  flex: 1;
  background-color: #fff;
  height: 80vh;
  overflow: scroll;
`
const Question = styled.span`
  height: 20vh;
  border-bottom: 1px solid #d147a3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #d147a3;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 2rem;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(209, 71, 163, 0.9);
    color: #fff;
  }
`

const AnswerSide = styled.div`
  flex: 2;
  background-color: #000;
  color: #fff;
  display: flex;
  height: 80vh;
  overflow: scroll;
  justify-content: center;
  align-items: center;
`

const Answer = styled.div`
  color: #fff;
  padding: 5% 15%;

  font-size: 1.2rem;
  line-height: 1.6;
`

function FaqContent () {
  const [answer, setAnswer] = useState('')
  const [previousId, setPreviousId] = useState('q1')

  function handleShowAnswer (id) {
    if (id !== previousId) {
      setPreviousId(id)
      document.getElementById(previousId).style = null
    }
    setAnswer(
      id === 'q1' ? (
        <>
          PLEASE SIGN IN TO RESERVE A PARKING LOT
          <br />
          Step 1: Select the place through reservation menu or homepage
          <br />
          If your coin less than 100 ,then you cannot reserve a lot.
          <br />
          Step 2: Choose floor if the place have more than 1 floor
          <br />
          Step 3: Choose the parking lot by clicking the pink car image in
          theparking map. You cannot choose the lot which has gray car image
          <br />
          Step 4: Click confirm button ; Please check reserve’s
          informationbefore click the button
          <br />
          Step 5: If you arrive add the parking lot then click check-in
          <br />
          Step 6: If you want to leave then click check-out.
          <br />
          Step 7: The system will deduct your coin automatically
        </>
      ) : id === 'q2' ? (
        <span>
          If you don't arrive in time then system will automatically cancel your
          reservation
        </span>
      ) : id === 'q3' ? (
        <span>You can not change their privileges for now.</span>
      ) : id === 'q4' ? (
        <span>You can contact us through this platform</span>
      ) : id === 'q5' ? (
        <span>
          You can only reserve a single lot in each reservation. if you want to
          reserve a new place , please check out or cancel the current
          reservation.
        </span>
      ) : (
        ''
      )
    )
    document.getElementById(id).style.background = 'rgba(209, 71, 163, 0.9)'
    document.getElementById(id).style.color = '#fff'
  }

  return (
    <FaqContainer>
      <FaqWrapper>
        <QuestionSide>
          <Question as='a' id='q1' onClick={() => handleShowAnswer('q1')}>
            How to reserve a parking lot ?
          </Question>
          <Question as='a' id='q2' onClick={() => handleShowAnswer('q2')}>
            What happens if you don’t arrive in time ?
          </Question>
          <Question as='a' id='q3' onClick={() => handleShowAnswer('q3')}>
            Can I reserve 2 places in same time ?
          </Question>
          <Question as='a' id='q4' onClick={() => handleShowAnswer('q4')}>
            Can I change my privilege ?
          </Question>
          <Question as='a' id='q5' onClick={() => handleShowAnswer('q5')}>
            How to contact us ?
          </Question>
        </QuestionSide>
        <AnswerSide>
          <Answer>{answer}</Answer>
        </AnswerSide>
      </FaqWrapper>
    </FaqContainer>
  )
}
export default FaqContent
