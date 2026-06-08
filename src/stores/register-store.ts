import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { RegisterFormData } from "../schemas/register-schema";

export interface RegistrationData extends RegisterFormData {
  id: string;
}

interface RegisterStore {
  registrationData: RegistrationData | null;
  registrationId: string | null;
  setRegistrationData: (data: RegistrationData) => void;
  setRegistrationId: (id: string) => void;
  clearRegistrationData: () => void;
}

export const useRegisterStore = create<RegisterStore>()(
  persist(
    (set) => ({
      registrationData: null,
      registrationId: null,

      setRegistrationId: (id) =>
        set({ registrationId: id }),

      setRegistrationData: (data) =>
        set({ registrationData: data }),

      clearRegistrationData: () =>
        set({
          registrationData: null,
          registrationId: null,
        }),
    }),
    {
      name: "company-registration",
    }
  )
);