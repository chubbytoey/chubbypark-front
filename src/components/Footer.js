import React from 'react'
import styled from 'styled-components'
import { Icon } from '../components/IconLayout'
import FacebookIcon from '../assets/facebook-icon.png'
import InstagramIcon from '../assets/instagram-icon.png'
import TelephoneIcon from '../assets/telephone-icon.png'

function Footer () {
  const FooterContainer = styled.div`
    display: flex;
    background-color: #D04394;
    height: 30vh;
    width: 100%;
    justify-content: space-between;
  `
  const FooterContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1;
    padding:2rem 1rem;
  `
  const ContentItem = styled.div`
    color: white;
    flex: 1;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
  `
  const ItemTitle = styled.h4`
    color: white;
    text-transform: uppercase;
    padding-bottom: 1rem;
    font-weight:bold;
  `

  const ItemList = styled.div`
    color: white;
    font-size: 0.7rem;
    margin: 0.3rem 0;
    font-weight:lighter;
    display:flex;
    div{
      margin-right:1rem;
    }
  `

  const FooterCopyright = styled.div`
    color: white;
    display: flex;
    align-items: flex-end;
    padding: 0.5rem;
    font-size: 0.8rem;
    flex: 1;
    opacity: 40%;
  `

  return (
    <FooterContainer>
      <FooterCopyright>Copyright © CHUBBYPARK</FooterCopyright>
      <FooterContent>
        <ContentItem>
          <ItemTitle>About us</ItemTitle>
          <ItemList>Our Service</ItemList>
          <ItemList>Our Partner</ItemList>
          <ItemList>News</ItemList>
        </ContentItem>
      </FooterContent>
      <FooterContent>
        <ContentItem>
          <ItemTitle>Contact</ItemTitle>
          <ItemList><Icon src={FacebookIcon} />CHUBBYPARK OFFICIAL</ItemList>
          <ItemList><Icon src={InstagramIcon}/>CHUBBYPARK OFFICIAL</ItemList>
          <ItemList><Icon src={TelephoneIcon}/>099-xxx-xxxx</ItemList>
        </ContentItem>
      </FooterContent>
    </FooterContainer>
  )
}
export default Footer
