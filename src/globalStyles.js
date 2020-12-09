import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "JetBrains Mono", monospace;
}

body {
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  color: #fdfcfb;
  margin: 2rem;

  @media screen and (min-width: 900px) {
    font-size: 3rem;
  }
`;

export const MainInfo = styled.h4`
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  margin: 0 0.5rem;

  @media screen and (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const Title = styled.h3`
  font-size: 0.9rem;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  color: #888888;

  @media screen and (min-width: 900px) {
    font-size: 1rem;
  }
`;

export default GlobalStyle;
