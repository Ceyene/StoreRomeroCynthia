//dependencies
import styled from "styled-components";

export const StyledProdIndicator = styled.span`
  background-color: ${(props) => (props.Message ? "#3D3D3D" : "#18689d")};
  color: #fdfcfb;
  font-size: 1rem;
  border-radius: ${(props) => (props.Message ? "1rem" : "50%")};
  width: ${(props) => (props.Message ? "55%" : "2rem")};
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.Message ? "space-around" : "center")};

  svg {
    fill: ${({ color }) => color || "white"};
    width: 1rem;
  }
`;
