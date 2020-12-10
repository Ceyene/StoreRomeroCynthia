//dependencies
import styled from "styled-components";
//image
import Background from "../../images/header-x1.png";

export const StyledHero = styled.section`
  background-image: url(${Background});
  height: 15rem;
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 900px) {
    height: 25rem;
    background-position: center;
  }
`;
