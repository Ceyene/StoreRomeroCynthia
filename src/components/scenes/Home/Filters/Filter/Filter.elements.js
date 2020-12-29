//dependencies
import styled from "styled-components";

export const StyledFilter = styled.button`
  outline: none;
  background-color: rgba(24, 104, 157, 0.6);
  border: none;
  border-radius: 1.5rem;
  color: #fdfcfd;
  padding: 0.5rem 1.5rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.5;
  cursor: pointer;
  box-shadow: inset 0 -0.1em rgba(0, 0, 0, 0.2);
  outline: 0;
  transition: 0.2s;
  will-change: transform;
  width: 70vw;

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 25vw;
  }

  @media screen and (min-width: 900px) {
    width: 25vw;
    max-width: 12.5rem;
    margin: 0 0.5rem;
  }
`;
