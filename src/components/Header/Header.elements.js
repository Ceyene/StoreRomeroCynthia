//dependencies
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fdfcfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  position: relative;

  @media screen and (min-width: 900px) {
    padding: 1rem 2.5rem;
  }
`;

export const StyledIcon = styled.span`
  svg {
    fill: ${({ color }) => color || "white"};
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  @media screen and (min-width: 900px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80vw;

  @media screen and (min-width: 900px) {
    max-width: 45vw;
  }
`;

export const Points = styled.div`
  padding: ${(props) => (props.Gift ? "0 0.5rem" : "0.5rem")};
  background-color: ${(props) =>
    props.Gift ? "transparent" : "rgba(24, 104, 157, 0.3)"};
  border-radius: ${(props) => (props.Gift ? "0" : "1rem")};
  display: flex;
  align-items: center;
  margin-left: ${(props) => (props.Gift ? "0" : "1rem")};
  margin-right: ${(props) => (props.Gift ? "0" : "0.75rem")};
`;

export const GiftPoints = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;

  @media screen and (min-width: 900px) {
    position: relative;
    display: block;
    background-color: transparent;
    width: auto;
  }
`;

export const GiftButton = styled.button`
  text-align: center;
  color: #fdfcfb;
  background-color: rgba(24, 104, 157, 0.6);
  border: none;
  padding: 0.4rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: inset 0 -0.1em rgba(0, 0, 0, 0.2);
  outline: 0;
  transition: 0.2s;
  will-change: transform;

  &:active {
    transform: scale(0.9);
  }
`;
