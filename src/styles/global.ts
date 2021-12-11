import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
  width: 100%;
  height: 100%;

  // base font-size
  font-size: 10px;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // font-size default
    font-size: 1.3rem;
    line-height: 1.6rem;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
