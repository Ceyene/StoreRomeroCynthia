const myHeaders = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNmZTc2MDI2ZjdkMjAwMjA0MTE0YzgiLCJpYXQiOjE2MDc0NjA3MDR9.oJ_SM-h-ATKByizUQ_injP39Cn_TE45KBBOHGD_JBng",
};
const productsEndpoint = "https://coding-challenge-api.aerolab.co/products";

const userEndpoint = "https://coding-challenge-api.aerolab.co/user/me";

const pointsEndpoint = "https://coding-challenge-api.aerolab.co/user/points";

/* --------------------------------- */
//it calls api and gets data
async function callApi(endpoint, headers) {
  const response = await fetch(endpoint, { headers });
  const data = await response.json();
  return data;
}

export const callProducts = () => {
  return callApi(productsEndpoint, myHeaders);
};

export const callUser = () => {
  return callApi(userEndpoint, myHeaders);
};

/* -------------------------------- */
//it add points to user
export const sendPoints = async (giftPoints) => {
  //receives the amount to add
  const raw = JSON.stringify({ amount: giftPoints });
  //info to api request options
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  //sending data to api
  await fetch(pointsEndpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      return result["New Points"];
    })
    .catch((error) => alert("error", error));
};
