import { useQuery } from "@tanstack/react-query";

import { getCompanyRegistration } from "../services/company-registration.service";

export const useGetCompanyRegistration = (registrationId: string) => {
  return useQuery({
    queryKey: ["company-registration", registrationId],
    queryFn: () => getCompanyRegistration(registrationId),
    enabled: !!registrationId,
  });
};