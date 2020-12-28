//dependencies
import styled from "styled-components";

export const StyledProdIndicator = styled.span`
  background-color: ${(props) => (props.Message ? "#3D3D3D" : "#18689d")};
  color: #fdfcfb;
  font-size: 1rem;
  border-radius: 1rem;
  width: ${(props) => (props.Message ? "55%" : "auto")};
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.Message ? "space-around" : "center")};

  svg {
    fill: ${({ color }) => color || "white"};
    width: 1rem;
    margin: 0 0.6rem;
  }
`;

export const StyledInd = styled.p`
  color: #fdfcfb;
  font-size: 1rem;
  padding: 1rem;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;
