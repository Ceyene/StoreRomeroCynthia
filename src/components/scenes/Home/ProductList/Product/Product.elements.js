//dependencies
import styled from "styled-components";

export const ProductContainer = styled.article`
  width: 90vw;
  margin: 1rem;
  position: relative;
  background-color: #fdfcfb;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    max-width: 40vw;
  }
  @media screen and (min-width: 900px) {
    max-width: 20vw;
  }
`;

export const StyledProduct = styled.div`
  padding: 0.5rem 0;
`;
