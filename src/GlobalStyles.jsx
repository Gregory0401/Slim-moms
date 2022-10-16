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
  font-weight: 700;
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



html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
    
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: auto;
  font-family: 'Verdana', 'Gotham Pro, sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-scrollbar {
  width: 12px;               
}
-webkit-scrollbar-track {
  background: orange;       
}
-webkit-scrollbar-thumb {
  background-color: blue;    /* цвет бегунка */
  border-radius: 20px;       /* округлось бегунка */
  border: 3px solid orange;  /* отступ вокруг бегунка */
}
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  width: 100%;
height: 100vh;
  scroll-behavior: smooth;
  font-family: 'Verdana';
  font-style: normal;  
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--main-text-color);
}
#root{
  width:100%;
  height: 100%;
  display: flex;
flex-direction: column;
justify-content: space-between;
}
body,
h1,
h2,
h3,
p,
ul,
li
 {
  margin: 0;
}
ul{
  list-style: none;
    padding: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
input,
button {
  font: inherit;
  background-color: inherit;
  padding: 0;
  margin: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}`;

export default GlobalStyle;
