import axios from "axios";

export const authInstance = axios.create({
  baseURL: '/api',
  timeout: 3000,
})