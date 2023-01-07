import axios, { AxiosInstance } from "axios";

export const $axios: AxiosInstance = axios.create({
  baseURL: (import.meta.env.VITE_BASE_URL as string) + "/items",
});
