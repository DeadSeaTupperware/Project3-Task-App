import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: #008599;
    color: hsl(192, 100%, 9%);
    font-family: 'Roboto', sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding:0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
  button {
  border: none;
  text-align: center;
  text-decoration: none;
  }
`;

export default GlobalStyles;
