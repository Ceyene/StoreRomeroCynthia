const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNmZTc2MDI2ZjdkMjAwMjA0MTE0YzgiLCJpYXQiOjE2MDc0NjA3MDR9.oJ_SM-h-ATKByizUQ_injP39Cn_TE45KBBOHGD_JBng",
};
const productsEndpoint = "https://coding-challenge-api.aerolab.co/products";

const userEndpoint = "https://coding-challenge-api.aerolab.co/user/me";

/* --------------------------------- */
//it calls api and gets data
async function callApi(endpoint, headers) {
  const response = await fetch(endpoint, { headers });
  const data = await response.json();
  return data;
}

export const callProducts = () => {
  return callApi(productsEndpoint, headers);
};

export const callUser = () => {
  return callApi(userEndpoint, headers);
};
