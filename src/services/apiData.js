export const myHeaders = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmViNmM4Y2Y3NjZmZTAwMTkxOWUwYzQiLCJpYXQiOjE2MDkyNjQyNjh9.GQiDxXmuMqfqcmmfElVVDCAgOj69hweTWELotAJL2zM",
};
export const baseUrl = "https://coding-challenge-api.aerolab.co/";

/* --------------------------------- */
//it calls api and gets data
export const callApi = async (endpoint, headers) => {
  const response = await fetch(endpoint, { headers });
  const data = await response.json();
  return data;
};
