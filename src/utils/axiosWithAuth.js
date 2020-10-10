import axios from "axios";

export const axiosAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    baseUrl: "http://localhost:5000/api/",
    headers: {
      Authorization: token,
    },
  });
};
