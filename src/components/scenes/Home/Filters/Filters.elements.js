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

  @media screen and (min-width: 900px) {
    padding: 1rem 15%;
    flex-direction: row;
  }
`;

export const PaginationContainer = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
    border-right: 1px solid #18689d;
    padding-right: 2rem;
  }
`;

export const ResetButton = styled.button`
  outline: none;
  background-color: rgba(24, 104, 157, 0.6);
  border: none;
  border-radius: 1rem;
  color: #fdfcfb;
  padding: 0.5rem 1.5rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.5;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;
