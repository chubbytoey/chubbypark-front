import styled from 'styled-components'

export const Content = styled.div`
  height: ${props => props.height}vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`
export const SignInWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const SideButton = styled.div`
  width: 2rem;
  height: 12vh;
  background-color: #d04394;
  position: absolute;
  margin-top: 2rem;
  border-radius: 10px 0 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #e04fa2;
  }
`
export const SideText = styled.div`
  color: #fff;
  padding: 0.2rem;
  writing-mode: vertical-rl;
  font-size: 0.7rem;
  transform: rotate(180deg);
`
export const SigninBlock = styled.div`
  margin: 0 2rem;
  width: 28rem;
  height: ${props => props.height}rem;
  border-radius: 10px;
  box-shadow: 2px 1px 20px #dbdbdb;
  background-color: #fff;
`
export const SigninBlockLayout = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`
export const SigninBlockTitle = styled.h1`
  font-weight: bold;
  padding: 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;
`
export const SigninInputBlock = styled.div`
  border: #aaa solid 1px;
  border-radius: 5px;
  margin: 0.4rem 0;
  padding: 0.5rem 1rem;
  width: 17rem;
  display: flex;
`
export const SigninInput = styled.input`
  outline: none;
  border: none;
  font-size: 0.8rem;
  flex: 1;

  &::placeholder {
    color: #aaa;
  }
`
export const SigninButton = styled.button`
  border: none;
  outline: none;
  width: 19rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #d04394;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1.2rem 0;

  &:hover {
    background-color: #e04fa2;
  }
`