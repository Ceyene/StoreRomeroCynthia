//dependencies
import React from "react";
//styled components
import { StyledHistory, HistoryList, HistoryProduct } from "./History.elements";
import {
  Title,
  ContainerInfo,
  SecondaryTitle,
  Info,
  ProductImg,
  Button,
  FlexContainer,
} from "../../globalStyles";
//styled icons
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

const History = () => {
  return (
    <StyledHistory>
      <Title>Redeem History</Title>
      <HistoryList>
        <HistoryProduct>
          <ProductImg
            src="https://dummyimage.com/600x400/000/fff.jpg"
            alt="Product"
          />
          <ContainerInfo>
            <SecondaryTitle>Product Name</SecondaryTitle>
            <Info>12000 pts</Info>
          </ContainerInfo>
        </HistoryProduct>
      </HistoryList>
      <FlexContainer>
        <Button color="#888888" borderColor="#888888" bgColor="transparent">
          <ArrowLeftShort />
        </Button>
        <Button color="#888888" borderColor="#888888" bgColor="transparent">
          <ArrowRightShort />
        </Button>
      </FlexContainer>
    </StyledHistory>
  );
};

export default History;
