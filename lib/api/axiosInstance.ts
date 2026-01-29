import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://anxsys-backend.vercel.app",
  headers: { "Content-Type": "application/json" },
});

// Add interceptors if needed (e.g., for auth tokens)
axiosInstance.interceptors.request.use((config) => {
  // e.g., config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
