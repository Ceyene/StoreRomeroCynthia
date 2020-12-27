//dependencies
import styled from "styled-components";

export const ProductContainer = styled.article`
  width: 90vw;
  margin: 1rem;
  position: relative;
  background-color: #fdfcfb;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 900px) {
    max-width: 20vw;
  }
`;

export const ProductRedeem = styled.div`
  background-color: rgba(24, 104, 157, 0.7);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  position: relative;

  @media screen and (min-width: 900px) {
    display: none;
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

export const StyledProduct = styled.div`
  @media screen and (min-width: 900px) {
    &:hover + ${ProductRedeem} {
      display: flex;
    }
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

export const ProductButton = styled.button`
  padding: 0.5rem;
  background-color: #fdfcfb;
  color: #18689d;
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 0.5rem;
  outline: none;

  @media screen and (min-width: 900px) {
    padding: 1rem 4rem;
    border-radius: 1.5rem;
    cursor: pointer;
  }
`;
