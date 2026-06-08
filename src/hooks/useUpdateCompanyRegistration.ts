import { useMutation } from "@tanstack/react-query";
import { updateCompanyRegistration } from "../services/company-registration.service";
import type { RegisterFormData } from "../schemas/register-schema";

export const useUpdateCompanyRegistration = () => {
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: RegisterFormData;
    }) => updateCompanyRegistration(id, data),
  });
};