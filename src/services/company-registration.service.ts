import { api } from "../libs/axios";
import type { RegisterFormData } from "../schemas/register-schema";

export const registerCompany = async (data: RegisterFormData) => {
  const res = await api.post("/company-registration", data);
  return res.data;
};

export const getCompanyRegistration = async (registrationId: string) => {
  const res = await api.get(`/company-registration/${registrationId}`);
  return res.data;
};

export const updateCompanyRegistration = async (registrationId: string, data: RegisterFormData) => {
  const res = await api.patch(`/company-registration/${registrationId}`, data);
  return res.data;
};