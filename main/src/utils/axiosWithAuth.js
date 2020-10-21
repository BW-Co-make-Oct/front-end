import * as axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://buildweeekenddpoints.herokuapp.com",
  });
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJldWJlbnNhbmR3aWNodGhlMXN0IiwiaWF0IjoxNjAzMjIxMzE4LCJleHAiOjE2MDMyNTAxMTh9.bB_rVISESRFDoCPrX1K3p38yDnewMwDoBtwT5gybY2A
