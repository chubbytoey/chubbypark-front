import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  Content,
  MenuContainer,
  Btn,
  MenuNavContainer,
  Menu,
  ContentContainer
} from '../components/MenuLayout'

const NewContent = styled(Content)`
  height: 70vh;
`
const NewMenu = styled(Menu)`
  padding: 1.5rem 4rem;
`

const ContentInside = styled.div`
  margin: 3rem 0;
  width: 80%;
`
function FaqContent() {
  const [answer, setAnswer] = useState('')
  const [previousID, setPreviousID] = useState('q1')

  function startPageMenu() {
    document.getElementById('q1').style.color = '#000'
    document.getElementById('q1').style.borderLeft = '5px solid #dd4a9e'
    document.getElementById('q1').style.backgroundColor = '#f8f8f8'
  }

  function handleShowAnswer(id) {
    if (id !== previousID) {
      setPreviousID(id)
      const element = document.getElementById(id)
      const element2 = document.getElementById(previousID)
      console.log(element, ':', element2)
      document.getElementById(id).style.color = '#000'
      document.getElementById(id).style.borderLeft = '5px solid #dd4a9e'
      document.getElementById(id).style.backgroundColor = '#f8f8f8'
      document.getElementById(previousID).style.backgroundColor = '#fff'
      document.getElementById(previousID).style.color = '#aaa'
      document.getElementById(previousID).style.border = 'none'
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
          <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </span>
      ) : id === 'q3' ? (
        <span>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
          <br />
          <br /> The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections 1.10.32 and 1.10.33
          from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </span>
      ) : id === 'q4' ? (
        <span>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
          <br />
          <br />
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </span>
      ) : id === 'q5' ? (
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
          <br />
          <br />
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains."
          <br />
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </span>
      ) : (
        ''
      )
    )
  }
  useEffect(() => {
    startPageMenu()
  }, [])
  return (
    <NewContent>
      <MenuContainer>
        <MenuNavContainer>
          <NewMenu id="q1" onClick={() => handleShowAnswer('q1')}>
            How to book a parking lot?
          </NewMenu>
          <NewMenu id="q2" onClick={() => handleShowAnswer('q2')}>
            If I don’t arrive in time?
          </NewMenu>
          <NewMenu id="q3" onClick={() => handleShowAnswer('q3')}>
            Can I book 2 places in same time?
          </NewMenu>
          <NewMenu id="q4" onClick={() => handleShowAnswer('q4')}>
            Can I change my privilege?
          </NewMenu>
          <NewMenu id="q5" onClick={() => handleShowAnswer('q5')}>
            How to contact us?
          </NewMenu>
        </MenuNavContainer>
      </MenuContainer>
      <ContentContainer>
        <ContentInside>{answer}</ContentInside>
      </ContentContainer>
    </NewContent>
  )
}
export default FaqContent

// const FaqContainer = styled.div`
//   width: 100%;
//   height: 80vh;
//   background-color: #fff;
//   overflow: scroll;
// `
// const FaqWrapper = styled.div`
//   display: flex;
// `
// const QuestionSide = styled.ul`
//   flex: 1;
//   background-color: #fff;
//   height: 80vh;
//   overflow: scroll;
// `
// const Question = styled.span`
//   height: 20vh;
//   border-bottom: 1px solid #d147a3;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   color: #d147a3;
//   font-size: 0.9rem;
//   font-weight: 600;
//   padding: 0 2rem;

//   cursor: pointer;
//   transition: font-size 0.5s;

//   &:hover {
//     /* text-decoration:underline; */
//     font-size: 0.97rem;
//   }
// `
// const AnswerSide = styled.div`
//   flex: 2;
//   background-color: #d147a3;
//   color: #fff;
//   display: flex;
//   height: 80vh;
//   overflow: scroll;
//   justify-content: center;
//   align-items: center;
// `
// const Answer = styled.div`
//   color: #fff;
//   padding: 2rem;
//   /* padding: 2rem 2rem 1rem 2rem; */

//   font-size: 1.2rem;
//   line-height: 1.6;
// `

// function FaqContent () {
//   const [answer, setAnswer] = useState('')
//   const [previousId, setPreviousId] = useState('q1')

//   function handleShowAnswer (id) {
//     if (id !== previousId) {
//       setPreviousId(id)
//       document.getElementById(previousId).style = null
//     }
//     setAnswer(
//       id === 'q1' ? (
//         <>
//           PLEASE SIGN IN TO RESERVE A PARKING LOT
//           <br />
//           Step 1: Select the place through reservation menu or homepage
//           <br />
//           If your coin less than 100 ,then you cannot reserve a lot.
//           <br />
//           Step 2: Choose floor if the place have more than 1 floor
//           <br />
//           Step 3: Choose the parking lot by clicking the pink car image in
//           theparking map. You cannot choose the lot which has gray car image
//           <br />
//           Step 4: Click confirm button ; Please check reserve’s
//           informationbefore click the button
//           <br />
//           Step 5: If you arrive add the parking lot then click check-in
//           <br />
//           Step 6: If you want to leave then click check-out.
//           <br />
//           Step 7: The system will deduct your coin automatically
//         </>
//       ) : id === 'q2' ? (
//         <span>
//           If you don't arrive in time then system will automatically cancel your
//           reservation
//         </span>
//       ) : id === 'q3' ? (
//         <span>You can not change their privileges for now.</span>
//       ) : id === 'q4' ? (
//         <span>You can contact us through this platform</span>
//       ) : id === 'q5' ? (
//         <span>
//           You can only reserve a single lot in each reservation. if you want to
//           reserve a new place , please check out or cancel the current
//           reservation.
//         </span>
//       ) : (
//         ''
//       )
//     )
//     document.getElementById(id).style.background = '#d147a3'
//     document.getElementById(id).style.color = '#fff'
//     // document.getElementById(id).style.transition = 'background-color .8s '
//   }

//   return (
//     <FaqContainer>
//       <FaqWrapper>
//         <QuestionSide>
//           <Question as='a' id='q1' onClick={() => handleShowAnswer('q1')}>
//             How to reserve a parking lot ?
//           </Question>
//           <Question as='a' id='q2' onClick={() => handleShowAnswer('q2')}>
//             What happens if you don’t arrive in time ?
//           </Question>
//           <Question as='a' id='q3' onClick={() => handleShowAnswer('q3')}>
//             Can I reserve 2 places in same time ?
//           </Question>
//           <Question as='a' id='q4' onClick={() => handleShowAnswer('q4')}>
//             Can I change my privilege ?
//           </Question>
//           <Question as='a' id='q5' onClick={() => handleShowAnswer('q5')}>
//             How to contact us ?
//           </Question>
//         </QuestionSide>
//         <AnswerSide>
//           <Answer>{answer}</Answer>
//         </AnswerSide>
//       </FaqWrapper>
//     </FaqContainer>
//   )
// }
// export default FaqContent
