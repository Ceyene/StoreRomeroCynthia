//dependencies
import React, { useState, useEffect } from "react";
//assets
import { callHistory } from "../../assets/apiData";
//components
import History from "../History/History";
//styled components
import { StyledHistory } from "./HistoryContainer.elements";
import { Title, Button, FlexContainer } from "../../globalStyles";
//styled icons
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

const HistoryContainer = () => {
  //state with redeem history
  const [history, setHistory] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  /* --------------------------------- */
  //First time it renders, it calls API and gets redeem history data
  useEffect(() => {
    getHistory();
  }, []);
  /* --------------------------------- */
  //Getting products data
  const getHistory = async () => {
    //initial state: loading and without errors
    setHistory({ loading: true, error: null });

    try {
      //data: async call, it returns promise
      const historyData = await callHistory();
      //stop loading and presenting data
      setHistory({ loading: false, data: historyData });
    } catch (error) {
      //stop loading and presenting error
      setHistory({ loading: false, error });
    }
  };
  /* --------------------------------- */
  return (
    <StyledHistory>
      <Title>Redeem History</Title>
      <History history={history} />
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

export default HistoryContainer;
