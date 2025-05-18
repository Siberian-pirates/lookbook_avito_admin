import axios from "axios";
import { API_ADDRESS } from "./constants";
import { AuthService } from "../auth-service";

const axiosInstance = axios.create({
  baseURL: `${API_ADDRESS}`,
});

axiosInstance.interceptors.request.use((config) => {
  const token = AuthService.getAccessToken();
  if (!token || AuthService.isTokenExpired()) {
    AuthService.clearTokens();
    window.location.href = "/login";
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    const { config, response } = err;

    if (response?.status === 401) {
      AuthService.clearTokens();
      window.location.href = "/login";
    }

    return Promise.reject(err);
  }
);

export { axiosInstance };
