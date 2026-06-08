import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Nama lengkap wajib diisi"),

  email: z
    .email("Email tidak valid")
    .trim(),

  companyName: z
    .string()
    .trim()
    .min(1, "Nama perusahaan wajib diisi"),

  businessField: z
    .string()
    .trim()
    .min(1, "Bidang usaha wajib diisi"),

  address: z
    .string()
    .trim()
    .min(1, "Alamat wajib diisi"),

  country: z
    .string()
    .trim()
    .min(1, "Negara wajib diisi"),

  phoneNumber: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]+$/, "Nomor telepon tidak valid"),

  plan: z.enum(
    ["1-month", "6-month", "12-month"],
    {
      error: "Pilih paket berlangganan",
    }
  ),
});

export type RegisterFormData = z.infer<typeof registerSchema>