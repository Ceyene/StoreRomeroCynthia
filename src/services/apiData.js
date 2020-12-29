export const myHeaders = {
  "Content-Type": "application/json",
  Authorization: MY_TOKEN,
};
export const baseUrl = "https://coding-challenge-api.aerolab.co/";

/* --------------------------------- */
//it calls api and gets data
export const callApi = async (endpoint, headers) => {
  const response = await fetch(endpoint, { headers });
  const data = await response.json();
  return data;
};
