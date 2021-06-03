import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    body::before{ c}
    img {
      height: auto;
      max-width: 100%;
    }
  }
  `
  
export default GlobalStyle
