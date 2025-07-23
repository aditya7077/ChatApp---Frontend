import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-backend-1-07wp.onrender.com",
  withCredentials: true,
});
