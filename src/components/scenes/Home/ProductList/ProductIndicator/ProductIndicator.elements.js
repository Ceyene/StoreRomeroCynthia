//dependencies
import styled from "styled-components";

export const StyledProdIndicator = styled.span`
  background-color: ${(props) =>
    props.Message ? "rgba(61, 61, 61, 0.75)" : "#18689d"};
  color: #fdfcfb;
  font-size: 1.05rem;
  border-radius: 1.6rem;
  padding: ${(props) => (props.Message ? "0.5rem 1rem" : "0.40rem 0.5rem")};
  width: auto;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ color }) => color || "white"};
    width: 1.05rem;
    margin: 0.5rem;
  }
`;

export const StyledInd = styled.p`
  color: #fdfcfb;
  font-size: 1.05rem;
  padding: 0.5rem;
  margin: 0.25rem;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;
