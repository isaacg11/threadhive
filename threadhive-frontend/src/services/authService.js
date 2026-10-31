import apiClient from "../api/apiClient.js";
import { AUTH_API } from "../config/apiConfig.js";

export const login = async (credentials) => {
  const res = await apiClient.post(AUTH_API.LOGIN, credentials);
  return res.data.data;
};

export const register = async (formData) => {
  const res = await apiClient.post(AUTH_API.REGISTER, formData);
  return res.data.data;
};
