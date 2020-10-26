import styled from 'styled-components'
import Select from 'react-select'


export const FirstContent = styled.div`
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
export const BackgroundOverlay = styled.div`
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

export const FirstContentTitle = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
`
export const FirstContentSubTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: normal;
  padding-top: 0.2rem;
`

export const FirstContentButton = styled.button`
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
export const SecondContent = styled.div`
  height: 170vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`
export const SecondContentBlock = styled.div`
  display: flex;
  flex: 1;
`
export const SecondContentBlockPicture = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SecondContentPicture = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 43vw;
  height: 43vh;

  /* for dev */
  background-color: #fff;
`

export const SecondContentOption = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SecondContentTitle = styled.h1`
  color: #dd4a9e;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  padding-bottom: 1rem;
  border-bottom: #000 1px solid;
  width: 23vw;
`
export const SecondContentDetail = styled.div`
  width: 23vw;
  color: #000;
  padding-top: 1rem;
`

export const PlaceField = styled(Select)`
  width: 40vw;
  margin: 1rem;
  font-size: 1rem;
`

export const selectStyle = {
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