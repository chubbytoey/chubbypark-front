import styled from 'styled-components'

export const Content = styled.div`
  height: 90vh;
  display: flex;
`
export const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Btn = styled.button`
  outline: none;
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  width: ${props => props.width};
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #c9c9c9;
    color: #6c6c6c;
    border:#c9c9c9 1px solid;
  }
`
export const MenuNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`

export const Menu = styled.a`
  color: #aaa;
  padding: 1.5rem 4rem;
  border: none;
  transition: 0.3s;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  background-color: #f8f8f8;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  /* for fit-content */
  /* align-items: flex-start; */
  /* padding-top:3rem; */
`
