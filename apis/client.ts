import axios from "axios";
import { getCookie } from "cookies-next";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

client.interceptors.request.use((config) => {
  const token = getCookie("votely.token");
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
});
