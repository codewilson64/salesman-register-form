import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { registerSchema, type RegisterFormData } from "../schemas/register-schema";
import { useRegisterCompany } from "../hooks/useRegisterCompany";
import { useRegisterStore } from "../stores/register-store";
import { useEffect } from "react";
import { useUpdateCompanyRegistration } from "../hooks/useUpdateCompanyRegistration";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      businessField: "",
      address: "",
      country: "",
      phoneNumber: "",
      plan: undefined,
    },
  });

  const navigate = useNavigate()

  const { mutateAsync: create } = useRegisterCompany();
  const { mutateAsync: update } = useUpdateCompanyRegistration();

  const { registrationId, setRegistrationData, setRegistrationId } = useRegisterStore();
  const registrationData = useRegisterStore((state) => state.registrationData);

  useEffect(() => {
    if (registrationData) {
      reset(registrationData);
    }
  }, [registrationData, reset]);

  const onSubmit = async (data: RegisterFormData) => {
    if (registrationId) {
        const res = await update({ id: registrationId, data });
        setRegistrationData({ ...data, id: res.registrationId });
        navigate(`/payment/${res.registrationId}`);
    } else {
        const res = await create(data);
        setRegistrationData({ ...data, id: res.registrationId });
        setRegistrationId(res.registrationId);
        navigate(`/payment/${res.registrationId}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-8 text-3xl font-bold">
          Registrasi Perusahaan
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Nama Lengkap
            </label>
            <input
              {...register("fullName")}
              className="w-full rounded-lg border px-4 py-3"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded-lg border px-4 py-3"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Nama Perusahaan
            </label>
            <input
              {...register("companyName")}
              className="w-full rounded-lg border px-4 py-3"
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Bidang Usaha
            </label>
            <input
              {...register("businessField")}
              className="w-full rounded-lg border px-4 py-3"
            />
            {errors.businessField && (
              <p className="mt-1 text-sm text-red-500">
                {errors.businessField.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Alamat
            </label>
            <textarea
              rows={4}
              {...register("address")}
              className="w-full rounded-lg border px-4 py-3"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Negara
            </label>
            <input
              {...register("country")}
              className="w-full rounded-lg border px-4 py-3"
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              No. Telepon
            </label>
            <input
              {...register("phoneNumber")}
              className="w-full rounded-lg border px-4 py-3"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Paket
            </label>

            <select
              {...register("plan")}
              className="w-full rounded-lg border px-4 py-3"
            >
              <option value="">
                Pilih Paket
              </option>
              <option value="1-month">
                1 Bulan - Rp250.000
              </option>
              <option value="6-month">
                6 Bulan - Rp1.350.000
              </option>
              <option value="12-month">
                12 Bulan - Rp2.400.000
              </option>
            </select>

            {errors.plan && (
              <p className="mt-1 text-sm text-red-500">
                {errors.plan.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white"
          >
            {isSubmitting ? "Memproses..." : "Lanjut"}
          </button>
        </form>
      </div>
    </div>
  );
}