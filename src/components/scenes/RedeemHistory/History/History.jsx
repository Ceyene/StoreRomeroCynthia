//dependencies
import React from "react";
//components
import HistoryProduct from "../HistoryProduct/HistoryProduct";
//styled components
import { HistoryList } from "./History.elements";
import { FlexContainer, SecondaryTitle } from "../../../styles/globalStyles";

//it renders history of redeemed products
const History = ({ history }) => {
  //state with products history data
  const { loading, error, data } = history;
  /* --------------------------------- */
  if (loading) {
    return (
      //It renders loading message
      <FlexContainer Centered>
        <SecondaryTitle Notification>Loading...</SecondaryTitle>
      </FlexContainer>
    );
  }

  if (error) {
    return (
      //It renders notification of error
      <FlexContainer Centered>
        <SecondaryTitle>{error}</SecondaryTitle>
      </FlexContainer>
    );
  }
  /* --------------------------------- */
  //it renders a list of redeemed products
  return Object.keys(data).length >= 1 ? (
    <HistoryList>
      {data.map((prod, index) => (
        <HistoryProduct
          key={`history${index}`}
          name={prod.name}
          photo={prod.img.url}
          cost={prod.cost}
        />
      ))}
    </HistoryList>
  ) : (
    //It renders message when no history products are found
    <FlexContainer Centered>
      <SecondaryTitle Notification>No products redeemed</SecondaryTitle>
    </FlexContainer>
  );
};

export default History;
