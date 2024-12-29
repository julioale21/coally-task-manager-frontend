import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

let cachedToken: string | null = null;

const getToken = async () => {
  if (cachedToken) return cachedToken;

  try {
    const session = await getSession();

    cachedToken = session?.user?.token || null;
    return cachedToken;
  } catch (error) {
    console.error("Failed to get session:", error);
    return null;
  }
};

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const token = await getToken();

      console.log(token);

      if (token) {
        if (!(config.headers instanceof AxiosHeaders)) {
          config.headers = new AxiosHeaders(config.headers);
        }

        config.headers.set("Authorization", `Bearer ${token}`);
      }

      return config;
    } catch (error) {
      console.error("Request interceptor error:", error);
      return config;
    }
  },
  (error) => {
    console.error("Request interceptor rejection:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await signOut({ redirect: true, callbackUrl: "/login" });
    }
    return Promise.reject(error);
  }
);
