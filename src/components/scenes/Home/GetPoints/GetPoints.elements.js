//dependencies
import styled from "styled-components";

export const GiftPoints = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;

  @media screen and (min-width: 768px) {
    height: 5vh;
  }
  @media screen and (min-width: 900px) {
    background-color: rgba(21, 220, 255, 0.2);
    position: relative;
    height: 7vh;
    max-height: 4.06rem;
  }
`;

export const GiftContainer = styled.div`
  padding: 0 0.5rem;
  background-color: "transparent";
  display: flex;
  align-items: center;
`;

export const GiftButton = styled.button`
  text-align: center;
  color: #fdfcfb;
  background-color: rgba(24, 104, 157, 0.6);
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  margin: 0.25rem;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: inset 0 -0.1em rgba(0, 0, 0, 0.2);
  outline: 0;
  transition: 0.2s;
  will-change: transform;

  &:active {
    transform: scale(0.9);
  }
`;
