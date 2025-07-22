import axios from "axios";
import { auth } from "./api";
import { getApiBaseUrl } from "../config/apiBaseUrl";

const API_BASE_URL = getApiBaseUrl();

// Function to get the token asynchronously
const getToken = async () => {
  const token = await auth.login({ email: "a@sad.com", password: "dsazxczcz" });
  return token;
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // <-- make this async to await token
    const token = await getToken(); // await here
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
