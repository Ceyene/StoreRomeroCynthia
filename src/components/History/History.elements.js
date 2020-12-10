//dependencies
import styled from "styled-components";

export const StyledHistory = styled.section`
  padding: 1rem;
  background-color: #fdfcfd;

  @media screen and (min-width: 900px) {
    padding: 1rem 15%;
  }
`;

export const HistoryList = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const HistoryProduct = styled.div`
  border: 1px solid #18689d;
  width: 70vw;

  @media screen and (min-width: 900px) {
    width: 13vw;
  }
`;
