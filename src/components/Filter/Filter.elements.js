//dependencies
import styled from "styled-components";

export const StyledFilter = styled.div`
  outline: none;
  background-color: rgba(24, 104, 157, 0.6);
  border: none;
  border-radius: 1rem;
  color: #fdfcfd;
  padding: 0 1.5rem;
  margin: 0.5rem 0;
  width: 70vw;
  font-size: 1.1rem;
  line-height: 1.5;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    margin: 0;
    width: 15vw;
  }
`;

export const StyledSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
  margin: 0;
  padding: 0.5rem;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  grid-area: select;
  align-self: center;
`;

export const StyledOption = styled.option`
  background-color: inherit;
  color: #000000;
`;
