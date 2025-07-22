import axios from "axios";
import { getApiBaseUrl } from "../config/apiBaseUrl";

const API_BASE_URL = getApiBaseUrl();

// Function to get the token synchronously from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
