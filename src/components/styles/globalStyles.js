//dependencies
import styled, { createGlobalStyle } from "styled-components";

//global styles
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
  font-size: ${(props) => (props.Message ? "0.75rem" : "1rem")};
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  margin: 0 0.5rem;

  @media screen and (min-width: 900px) {
    font-size: ${(props) => (props.Message ? "1rem" : "1.5rem")};
  }
`;

export const Title = styled.h3`
  font-size: ${(props) => (props.Section ? "1.3rem" : "1rem")};
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  color: ${(props) => (props.Gift ? "#ffffff" : "#888888")};

  @media screen and (min-width: 900px) {
    font-size: ${(props) => (props.Section ? "1.6rem" : "1.1rem")};
    color: ${(props) => props.Gift && "#000000"};
  }
`;

export const Info = styled.h6`
  font-size: 0.9rem;
  font-family: "JetBrains Mono", monospace;
  font-weight: 100;
  color: ${(props) => (props.Modal ? "#464646" : "#888888")};
`;

export const SecondaryTitle = styled.h4`
  font-size: 1.3rem;
  font-family: "JetBrains Mono", monospace;
  color: ${(props) => (props.Modal ? "#FFFFFF" : "#18689d")};
  margin: ${(props) => (props.Notification ? "2.5rem 0" : "0")};
`;

export const ProductImg = styled.img`
  width: ${(props) => (props.Small ? "30vw" : "100%")};

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.Small ? "25%" : "100%")};
  }
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
      background-color: #ffffff;
    }
  }
`;

export const ActionButton = styled.button`
  padding: 1rem;
  background-color: #fdfcfb;
  color: ${({ color }) => color};
  font-size: 1.25rem;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 1.5rem;
  outline: none;

  @media screen and (min-width: 900px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const ContainerInfo = styled.div`
  padding: 1rem;
  border-top: 1px solid #18689d;
`;

export default GlobalStyle;
