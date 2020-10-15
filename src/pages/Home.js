import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import BeEasy from '../assets/be-easy.jpg'

const FirstContent = styled.div`
  height: 70vh;
  background-color: #fff;
  display: flex;
`
const FirstContentPicture = styled.div`
  background-color: #dd4a9e;
  flex: 2;
`
const FirstContentFind = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const FirstContentTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
`

const FirstContentSearch = styled.select`
  outline: none;
  border: none;
  border: #aaa 1px solid;
  width: 45vw;
  padding: 1rem;
  margin: 1.5rem;
`

const FirstContentSearchList = styled.option``

const FirstContentButton = styled.button`
  border: none;
  outline: none;
  width: 45vw;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  background-color: #dd4a9e;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 1px 10px 1px #aaa;
  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 20px 5px #aaa;
  }
`
const SecondContent = styled.div`
  height: 170vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
`
const SecondContentBlock = styled.div`
  display: flex;
  flex: 1;
`
const SecondContentBlockPicture = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SecondContentPicture = styled.div`
  /* background-image:url(${props => props.src}); */
  /* background-size:cover; */
  width: 30vw;
  height: 35vh;

  /* for dev */
  background-color: #dd4a9e;
`

const SecondContentOption = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SecondContentTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  padding-bottom: 1rem;
  border-bottom: #fff 1px solid;
  width: 23vw;
`
const SecondContentDetail = styled.div`
  width: 23vw;
  color: #fff;
  padding-top: 1rem;
`

function Home() {
  return (
    <>
      <Navbar />
      <FirstContent>
        <FirstContentPicture />
        <FirstContentFind>
          <FirstContentTitle>choose a place you want now!!</FirstContentTitle>

          <FirstContentSearch>
            <FirstContentSearchList>1</FirstContentSearchList>
            <FirstContentSearchList>2</FirstContentSearchList>
            <FirstContentSearchList>3</FirstContentSearchList>
            <FirstContentSearchList>4</FirstContentSearchList>
          </FirstContentSearch>

          <FirstContentButton>next</FirstContentButton>
        </FirstContentFind>
      </FirstContent>

      <SecondContent>
        <SecondContentBlock>
          <SecondContentBlockPicture>
            <SecondContentPicture src={BeEasy} />
          </SecondContentBlockPicture>

          <SecondContentOption>
            <SecondContentTitle>be easy</SecondContentTitle>
            <SecondContentDetail>
              Easy to use,just choose the place then reserve the parking lot
            </SecondContentDetail>
          </SecondContentOption>
        </SecondContentBlock>

        <SecondContentBlock>
          <SecondContentOption>
            <SecondContentTitle>cheap price</SecondContentTitle>
            <SecondContentDetail>
              Friendly prices with variety of promotion and exclusive previllege
            </SecondContentDetail>
          </SecondContentOption>
          <SecondContentBlockPicture>
            <SecondContentPicture src={BeEasy} />
          </SecondContentBlockPicture>
        </SecondContentBlock>

        <SecondContentBlock>
          <SecondContentBlockPicture>
            <SecondContentPicture src={BeEasy} />
          </SecondContentBlockPicture>
          <SecondContentOption>
            <SecondContentTitle>reserve from everywhere</SecondContentTitle>
            <SecondContentDetail>
              online service help you can reserve parking lot from everywhere
              you are
            </SecondContentDetail>
          </SecondContentOption>
        </SecondContentBlock>
      </SecondContent>

      <Footer />
    </>
  )
}
export default Home
