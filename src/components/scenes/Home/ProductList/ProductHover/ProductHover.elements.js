//dependencies
import styled from "styled-components";

export const ProductRedeem = styled.div`
  background-color: rgba(24, 104, 157, 0.7);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  position: relative;

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ color }) => color};
    width: 1.5rem;
    margin-left: 0.5rem;
  }
`;

export const ProductValue = styled.p`
  color: #fdfcfb;
  font-size: 1.5rem;
  font-family: "Rubik", sans-serif;

  @media screen and (min-width: 900px) {
    font-size: 2.25rem;
  }
`;
