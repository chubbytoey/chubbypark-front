import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadPicture from '../assets/headPhoto.jpg'
import GoodPoint1Pic from '../assets/goodpoint1.jpg'
import GoodPoint2Pic from '../assets/goodpoint2.jpg'
import ActionContext from '../contexts/ActionContext'
import GoodPoint3Pic from '../assets/car2.png'
import { Link } from 'react-router-dom'
import {
  FirstContent,
  BackgroundOverlay,
  FirstContentTitle,
  FirstContentSubTitle,
  FirstContentButton,
  SecondContent,
  SecondContentBlock,
  SecondContentBlockPicture,
  SecondContentPicture,
  SecondContentOption,
  SecondContentTitle,
  SecondContentDetail,
  PlaceField,
  selectStyle
} from '../components/HomeStyle'

function Home() {
  const tokenTest = window.localStorage.getItem('storeToken')
  tokenTest !== null ? console.log('login') : console.log('not login') // forChecklogin

  const {
    placeOptions,
    handleLocation
  } = useContext(ActionContext)

  return (
    <>
      <Navbar />
      <FirstContent src={HeadPicture}>
        <BackgroundOverlay>
          <FirstContentTitle>rent a parking</FirstContentTitle>
          <FirstContentSubTitle>choose your destination</FirstContentSubTitle>

          <PlaceField
            label="place"
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
            <Link to="/parkingarea">next</Link>
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
            <SecondContentPicture src={GoodPoint3Pic} />
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
