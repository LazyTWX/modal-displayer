import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    height: 100%;

    font-size: 62.5%;
  }

  :root {
    --black: #121214;
    --purple: #7159c1;
  }

  body {
    background-color: var(--black);
  }

  button {
    cursor: pointer;
  }
`;