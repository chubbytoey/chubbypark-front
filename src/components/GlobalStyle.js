import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body , #root {
    height: 100vh;
    width: 100vw;
    font-size:20px;
    scroll-behavior: smooth;
    font-family: 'HelveticaNeue' , sans-serif;

    @media only screen and (max-width:400px){
    width: auto;
    height: auto;
    overflow-x:hidden;
    font-size:12px;
    }
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  &:visited {
    color:inherit;
  }

`
export default GlobalStyle
