//Dependencies
import React, { useState, useEffect } from "react";
//Assets
import { callUser } from "./apiData";

//Creating context
export const UserContext = React.createContext();

//Creating Provider
export default function UserProvider({ children }) {
  //Defining initial states with useState
  const [userPoints, setUserPoints] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  const [userName, setUserName] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    getUser();
  }, []);
  /* --------------------------------- */
  //Getting user data
  const getUser = async () => {
    //initial state: loading and without errors
    setUserPoints({ loading: true, error: null });

    try {
      //data: async call, it returns promise
      const user = await callUser();
      //stop loading and presenting data
      setUserPoints({ loading: false, data: user.points });
      setUserName({ loading: false, data: user.name });
    } catch (error) {
      //stop loading and presenting error
      setUserPoints({ loading: false, error });
      setUserName({ loading: false, error });
    }
  };
  /* --------------------------------- */

  return (
    <UserContext.Provider value={{ userPoints, userName }}>
      {children}
    </UserContext.Provider>
  );
}
