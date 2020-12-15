//dependencies
import React, { useState, useEffect } from "react";
//assets
import { callHistory } from "../../assets/apiData";
//components
import History from "../History/History";
//styled components
import { StyledHistory } from "./HistoryContainer.elements";
import { Title } from "../../globalStyles";

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
  //it renders history section
  return (
    <StyledHistory>
      <Title>Redeem History</Title>
      <History history={history} />
    </StyledHistory>
  );
};

export default HistoryContainer;
