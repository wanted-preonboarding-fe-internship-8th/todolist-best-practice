import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #252d58;
    --light-blue: #00d0ff;
    --text-blue: #06c;

    --gray1: #fefefe;
    --gray2: #ddd;
    --gray3: #ededed;
    --gray4: #9e9e9e;
    --gray5: #d6d6d6;
    --gray6: #9e9c9c;

    --primary-100: #a9c8f8;
    --primary-200: #98bdf6;
    --primary-300: #7eadf4;
    --primary-400: #045de9;

    --error: #d21616;
    --white: #fff;

    --black: #252525;
    --gradient-blue: linear-gradient(to right, #44adff, #045de9);
  }
  * {
    margin: 0;
    padding: 0;
  
  }
  body {
    color: var(--black);
    background-color: var(--white);
  }
  h1 {
    font-size: 16px;
  }
  ul,
  li {
    list-style: none;
  }
  textarea,
  keygen,
  select,
  button {
    all: unset;
    font-family: inherit;
    font-size: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  //중앙 정렬
  & .text-center {
    text-align: center;
  }
  //커서 pointer
  & .cursor-pointer {
    cursor: pointer;
  }
  //* 복사 금지
  & .stop-dragging {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  input, textarea {
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
  
`;

export default GlobalStyle;
