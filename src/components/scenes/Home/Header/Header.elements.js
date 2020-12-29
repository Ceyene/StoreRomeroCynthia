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
    width: 1rem;
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 900px) {
    svg {
      width: 1.5rem;
    }
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

export const UserInfo = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80vw;

  @media screen and (min-width: 900px) {
    max-width: 45vw;
  }
`;

export const Points = styled.div`
  padding: 0.5rem;
  background-color: rgba(24, 104, 157, 0.3);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  margin-left: 0.25rem;
`;

export const HistoryButton = styled.button`
  display: ${(props) => props.display};
  align-items: center;
  outline: none;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    font-family: "Rubik", sans-serif;
    color: #000000;
    font-size: 1rem;
    font-weight: 500;
  }

  svg {
    fill: #000;
    width: 1rem;
    margin-left: 0.25rem;
  }

  @media screen and (min-width: 900px) {
    cursor: pointer;

    a {
      font-size: 1.5rem;
    }

    svg {
      width: 1.5rem;
    }
  }
`;
