//dependencies
import styled from "styled-components";

export const StyledHistory = styled.section`
  padding: 1.5rem 1rem;
  border-top: 3px solid #15dbff;
  text-align: center;

  @media screen and (min-width: 900px) {
    padding: 2rem 10%;
    text-align: left;
  }
`;

export const BackLink = styled.div`
  width: 9.375rem;
  padding: 0.5rem 0;
  margin: 1rem auto;
  border-radius: 1.5rem;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);

  a {
    color: #18689d;
    font-weight: 600;
    text-decoration: none;
    padding: 1rem 1.5rem;
  }

  @media screen and (min-width: 900px) {
    margin: 1rem;
    cursor: pointer;

    :hover {
      background-color: #ffffff;
    }
  }
`;
