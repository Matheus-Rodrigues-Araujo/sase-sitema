import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --black: #000000;
    --red-maroon: #3D0000;
    --red-strong: #950101;
    --btnBlack: black;
  }
  
  body{
    color: white;
    font-family:;
    font-size: 2rem;
    font-weight: 700;
    border: 5px outset cyan
  }


  body button{
    border-radius: 1em;
  }
  ${
    '' /* span{
    color: var(--btnBlack);
  } */
  }
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles
