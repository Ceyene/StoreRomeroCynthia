//dependencies
import styled from "styled-components";

export const StyledFilter = styled.button`
  outline: none;
  background-color: rgba(24, 104, 157, 0.6);
  border: none;
  border-radius: 1rem;
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

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;
