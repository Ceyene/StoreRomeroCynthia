//dependencies
import React, { useContext } from "react";
//assets
import { sendPoints } from "../../../../services/apiUser";
//context
import { UserContext } from "../../../../context/userProvider";
//styled components
import { GiftPoints, GiftButton, GiftContainer } from "./GetPoints.elements";
import { Title } from "../../../styles/globalStyles";

const GetPoints = () => {
  //extracting data from Provider UserContext
  const { userPoints, setUserPoints } = useContext(UserContext);
  /* --------------------------------- */
  //update points when adding gift points
  const addPoints = async (giftPoints) => {
    try {
      //initial state: loading and without errors
      setUserPoints({ ...userPoints, loading: true, error: null });
      //data: async call, it returns promise
      const getPoints = await sendPoints(giftPoints);
      const newPoints = getPoints["New Points"];
      //presenting data
      return setUserPoints({ ...userPoints, loading: false, data: newPoints });
    } catch (error) {
      //presenting error
      return setUserPoints({ ...userPoints, loading: false, error });
    }
  };
  /* --------------------------------- */
  return (
    <GiftPoints>
      <Title Gift>Get Free Points!</Title>
      <GiftContainer>
        <GiftButton
          onClick={() => {
            addPoints(1000);
          }}
        >
          {" "}
          1000{" "}
        </GiftButton>
        <GiftButton
          onClick={() => {
            addPoints(5000);
          }}
        >
          {" "}
          5000{" "}
        </GiftButton>
        <GiftButton
          onClick={() => {
            addPoints(7500);
          }}
        >
          {" "}
          7500{" "}
        </GiftButton>
      </GiftContainer>
    </GiftPoints>
  );
};

export default GetPoints;
