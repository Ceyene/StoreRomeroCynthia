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
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  color: #888888;

  @media screen and (min-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const Info = styled.h6`
  font-size: 0.9rem;
  font-family: "JetBrains Mono", monospace;
  font-weight: 100;
  color: #888888;
`;

export const SecondaryTitle = styled.h4`
  font-size: 1.3rem;
  font-family: "JetBrains Mono", monospace;
  color: #18689d;
`;

export const ProductImg = styled.img`
  width: 100%;
`;

export const PaginationText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #18689d;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.Centered ? "center" : "space-between")};
  align-items: center;
`;

export const Button = styled.button`
  outline: none;
  margin-left: 1.5rem;
  border-radius: 50%;
  border: 1px solid ${({ borderColor }) => borderColor};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: inset 0 -0.2em rgba(0, 0, 0, 0.2);
  font-family: "Rubik", sans-serif;
  padding: 0.5rem;

  svg {
    fill: ${({ color }) => color};
    width: 1.5rem;
  }

  @media screen and (min-width: 900px) {
    cursor: pointer;

    &:hover {
      background-color: #ebe8e8;
    }
  }
`;

export const ContainerInfo = styled.div`
  padding: 1rem;
  border-top: 1px solid #18689d;
`;

export default GlobalStyle;
