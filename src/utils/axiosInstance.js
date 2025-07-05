import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can add any request interceptors here if needed
//     return config;
//   },
//   (error) => {
//     // Handle request errors here
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
