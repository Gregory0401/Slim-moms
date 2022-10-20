import { createGlobalStyle } from 'styled-components';

import Verdana from './Utils/fonts/verdana.ttf';

import VerdanaBold from './Utils/fonts/verdanab.ttf';
import GothamPro from './Utils/fonts/GothamPro-Bold.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Verdana';
  src: url(${Verdana}) format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'Verdana';
  src: url(${VerdanaBold}) format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: 'GothamPro';
  src: url(${GothamPro}) format('truetype');
  font-weight: 70 0;
}


:root {
  --primary-text-color: #212121;
  --secondary-text-color: #9B9FAA;
  --white: #ffffff;
  --blue-txt-color: #264061;
  --orange-color: #FC842D;
  --orange-bgc:#FC842D;
  --accent-shadow: rgba(252, 132, 45, 0.5);
  --secondary-background-color: #F0F1F3;
  --border-color: #e0e0e0;
  
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms;
  --transition-params: var(--timing-function) var(--trans-duration); 
}



* {
    box-sizing: border-box;
  }
  body {

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
        background-color: ${p => p.theme.body};
    transition: all ${props => props.theme.transitionTime};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  address {
    /* by default address italic */
    font-style: normal;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
  }
  article {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    background: transparent;
  }
`;

export default GlobalStyle;
