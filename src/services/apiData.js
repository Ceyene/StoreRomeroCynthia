export const myHeaders = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YWJhYjI2ZjdkMjAwMjA0MTE0Y2QiLCJpYXQiOjE2MDgxMDA3Nzl9.bjQRXSEcQuF_zFF_HS0NuNT0YHRE-UDAxlGe5q9EZdU",
};
export const baseUrl = "https://coding-challenge-api.aerolab.co/";

/* --------------------------------- */
//it calls api and gets data
export const callApi = async (endpoint, headers) => {
  const response = await fetch(endpoint, { headers });
  const data = await response.json();
  return data;
};
