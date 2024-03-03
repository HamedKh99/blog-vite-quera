import axios from "axios";

export const authInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
