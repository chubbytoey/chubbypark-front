import React from 'react'
import styled from 'styled-components'

const FaqContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #000;
  overflow:scroll;
`
const FaqWrapper = styled.div`
  display: flex;
`
const QuestionSide = styled.ul`
  flex: 1;
  background-color: #fff;
  height: 80vh;
  overflow:scroll;
`
const Question = styled.li`
  height: 20vh;
  border-bottom: 1px solid #d147a3;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(209, 71, 163, 0.9);
    color: #fff;
  }
`

const AnswerSide = styled.div`
  flex: 2;
  background-color: #000;
  color: #fff;
`

function FaqContent () {
  return (
    <FaqContainer>
      <FaqWrapper>
        <QuestionSide>
          <Question as='a'>How you like that ?</Question>
          <Question as='a'>How you like that ?</Question>
          <Question as='a'>How you like that ?</Question>
          <Question as='a'>How you like that ?</Question>
          <Question as='a'>How you like that ?</Question>
        </QuestionSide>
        <AnswerSide>B</AnswerSide>
      </FaqWrapper>
    </FaqContainer>
  )
}
export default FaqContent
