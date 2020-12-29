//dependencies
import styled from "styled-components";

export const FiltersContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background-color: #fdfcfb;
  border-bottom: 1px solid #18689d;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 5%;
  }

  @media screen and (min-width: 1200px) {
    padding: 1rem 15%;
    justify-content: center;
  }
`;

export const PaginationContainer = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
    border-right: 1px solid #18689d;
    padding-right: 1rem;
    margin-right: 1rem;
  }
`;
