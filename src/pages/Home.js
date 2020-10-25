import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HeadPicture from '../assets/headPhoto.jpg'
import GoodPoint1Pic from '../assets/goodpoint1.jpg'
import GoodPoint2Pic from '../assets/goodpoint2.jpg'
import Select from 'react-select'
import ActionContext from '../contexts/ActionContext'
// import GoodPoint3Pic from '../assets/goodpoint3.jpg'
import { Link } from 'react-router-dom'
const FirstContent = styled.div`
  height: 78vh;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 78%;
  /* background-image: linear-gradient(to right,#dd4a9e , #2F9DC6); */
  background-color: rgba(203, 74, 148, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FirstContentTitle = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
`
const FirstContentSubTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: normal;
  padding-top: 0.2rem;
`

const FirstContentButton = styled.button`
  border: none;
  outline: none;
  width: 40vw;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  background-color: #dd4a9e;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #c9c9c9;
    color: #6c6c6c;
  }
`
const SecondContent = styled.div`
  height: 170vh;
  background-color: #fff;
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
  background-image: url(${props => props.src});
  background-size: cover;
  width: 43vw;
  height: 43vh;

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
  color: #dd4a9e;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  padding-bottom: 1rem;
  border-bottom: #000 1px solid;
  width: 23vw;
`
const SecondContentDetail = styled.div`
  width: 23vw;
  color: #000;
  padding-top: 1rem;
`

const PlaceField = styled(Select)`
  width: 40vw;
  margin: 1rem;
  font-size: 1rem;
`

const selectStyle = {
  control: (styles, { isFocused }) => ({
    ...styles,
    border: 0,
    height: 70,
    boxShadow: 0,
    paddingLeft: 30
  }),
  menuList: base => ({
    ...base,
    marginTop: 5,
    marginBottom: 5
  })
}

function Home () {
  const tokenTest = window.localStorage.getItem('storeToken')
  tokenTest !== null ? console.log('login') : console.log('not login') // forChecklogin

  const {
    placeOptions,
    floorOption,
    selected,
    isLoading,
    error,
    selectInputRef,
    handleLocation,
    handleFloor
  } = useContext(ActionContext)

  return (
    <>
      <Navbar />
      <FirstContent src={HeadPicture}>
        <BackgroundOverlay>
          <FirstContentTitle>rent a parking</FirstContentTitle>
          <FirstContentSubTitle>choose your destination</FirstContentSubTitle>

          <PlaceField
            label='place'
            styles={selectStyle}
            options={placeOptions}
            theme={theme => ({
              ...theme,
              borderRadius: 10,
              border: 'none',
              colors: {
                ...theme.colors,
                primary25: '#FF69B4',
                primary: '#000'
              }
            })}
            onChange={handleLocation}
          />

          <FirstContentButton>
            <Link to='/parkingarea'>next</Link>
          </FirstContentButton>
        </BackgroundOverlay>
      </FirstContent>

      <SecondContent>
        <SecondContentBlock>
          <SecondContentBlockPicture>
            <SecondContentPicture src={GoodPoint1Pic} />
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
            <SecondContentPicture src={GoodPoint2Pic} />
          </SecondContentBlockPicture>
        </SecondContentBlock>

        <SecondContentBlock>
          <SecondContentBlockPicture>
            {/* <SecondContentPicture src={GoodPoint3Pic} /> */}
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
