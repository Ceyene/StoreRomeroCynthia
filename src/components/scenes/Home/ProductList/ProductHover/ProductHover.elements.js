//dependencies
import styled from "styled-components";

export const ProductRedeem = styled.div`
  background-color: rgba(24, 104, 157, 0.7);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  @media screen and (min-width: 900px) {
    justify-content: space-evenly;
  }
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    fill: ${({ color }) => color};
    width: 2.5rem;
    margin-left: 0.5rem;
  }
  @media screen and (min-width: 900px) {
    svg {
      width: 1.5rem;
    }
  }
`;

export const ProductValue = styled.p`
  color: #fdfcfb;
  font-size: 3.5rem;
  font-family: "Rubik", sans-serif;

  @media screen and (min-width: 900px) {
    font-size: 2.25rem;
  }
`;
