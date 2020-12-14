//dependencies
import React from "react";
//styled components
import { MainInfo } from "../../globalStyles";

const MainInformation = ({ userInfo }) => {
  const { loading, error, data } = userInfo;
  if (loading === true) {
    return (
      //It renders loading message
      <MainInfo Message>Loading...</MainInfo>
    );
  }

  if (error) {
    return (
      //It renders notification of error
      <MainInfo Message>{error}</MainInfo>
    );
  }
  return <MainInfo>{data}</MainInfo>;
};

export default MainInformation;
