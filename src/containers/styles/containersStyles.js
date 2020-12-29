//dependencies
import styled from "styled-components";

export const NotFoundContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotFoundImg = styled.img`
  width: 90vw;
  @media screen and (min-width: 768px) {
    width: 45vw;
  }
  @media screen and (min-width: 900px) {
    width: 35vw;
  }
`;

export const StyledLink = styled.div`
  text-align: center;

  a {
    padding: 1rem 2.5rem;
    background-color: #18689d;
    color: #fdfcfb;
    font-size: 1rem;
    font-family: "Rubik", sans-serif;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    outline: none;

    @media screen and (min-width: 900px) {
      padding: 1rem 4rem;
      border-radius: 1.5rem;
      cursor: pointer;
    }
  }
`;
