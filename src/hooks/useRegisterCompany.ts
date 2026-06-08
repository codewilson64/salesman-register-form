import { useMutation } from "@tanstack/react-query";
import { registerCompany } from "../services/company-registration.service";

export const useRegisterCompany = () => {
  return useMutation({
    mutationFn: registerCompany,
  });
};