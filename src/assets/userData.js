// //Dependencies
// import React, { useState } from "react";
// //Assets
// import { headers, userEndpoint } from "./assets/apiData";

// //Creating context
// export const UserContext = React.createContext();

// //Creating Provider
// export default function UserProvider({ children }) {
//   //Defining initial states with useState
//   const [userPoints, setUserPoints] = useState(0);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     //it calls API and gets user data
//     const getPoints = () => {
//       fetch(userEndpoint, { headers })
//         .then((response) => response.json())
//         .then((content) => {
//           console.log(content);
//         })
//         .catch((error) => {
//           return error;
//         });
//     };
//     //it calls API and gets user data
//     const getName = () => {
//       fetch(userEndpoint, { headers })
//         .then((response) => response.json())
//         .then((content) => {
//           console.log(content);
//         })
//         .catch((error) => {
//           return error;
//         });
//     };
//   }, []);

//   return (
//     <UserContext.Provider value={{ userPoints, setUserPoints }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
