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

  }

`
export default GlobalStyle
