import React from 'react'
import styled from 'styled-components'

function Footer () {
  const FooterContainer = styled.div`
    display: flex;
    background-color: #D04394;
    height: 35vh;
    width: 100%;
    justify-content: space-between;
  `
  const FooterContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1;
    padding: 1rem;
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
  `

  const ItemList = styled.div`
    color: white;
    font-size: 0.7rem;
    margin: 0.3rem 0;
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
          <ItemList>CHUBBYPARK OFFICIAL</ItemList>
          <ItemList>CHUBBYPARK OFFICIAL</ItemList>
          <ItemList>099-xxx-xxxx</ItemList>
        </ContentItem>
      </FooterContent>
    </FooterContainer>
  )
}
export default Footer
