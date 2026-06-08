import { useParams } from "react-router-dom";
import { useGetCompanyRegistration } from "../hooks/useGetCompanyRegistration";
import { useRegisterStore } from "../stores/register-store";

export default function PaymentPage() {
  const { registrationId } = useParams();

  const { data, isPending, isError } = useGetCompanyRegistration(registrationId ?? "");

  const registrationData = useRegisterStore((state) => state.registrationData);

  console.log(registrationData);

  const planLabelMap = {
    "1-month": "1 Bulan",
    "6-month": "6 Bulan",
    "12-month": "12 Bulan",
  };

  const planPriceMap = {
    "1-month": "Rp250.000",
    "6-month": "Rp1.350.000",
    "12-month": "Rp2.400.000",
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!registrationData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        No registration data found
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Registration not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Pembayaran Registrasi
          </h1>

          <p className="mt-2 text-gray-600">
            Selesaikan pembayaran untuk mengaktifkan
            akun perusahaan Anda.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Detail Pesanan */}
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-xl font-semibold">
              Detail Pesanan
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">
                  Registration ID
                </p>
                <p className="font-medium">
                  {registrationData.id}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Nama Perusahaan
                </p>
                <p className="font-medium">
                  {registrationData.companyName}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Paket
                </p>
                <p className="font-medium">
                  {
                    planLabelMap[
                      registrationData.plan as keyof typeof planLabelMap
                    ]
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Harga
                </p>
                <p className="text-2xl font-bold">
                  {
                    planPriceMap[
                      registrationData.plan as keyof typeof planPriceMap
                    ]
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Status
                </p>

                <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                  Menunggu Pembayaran
                </span>
              </div>
            </div>
          </div>

          {/* Informasi Transfer */}
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-xl font-semibold">
              Transfer Bank
            </h2>

            <div className="rounded-lg border bg-slate-50 p-5">
              <p className="text-sm text-gray-500">
                Bank
              </p>

              <p className="text-lg font-semibold">
                BCA
              </p>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Nomor Rekening
                </p>

                <div className="mt-1 flex items-center justify-between rounded-lg border bg-white px-4 py-3">
                  <span className="font-mono text-lg">
                    8645044122
                  </span>

                  <button
                    type="button"
                    className="rounded-md border px-3 py-1 text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Atas Nama
                </p>

                <p className="font-medium">
                  Wilson
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sisanya tetap persis sama */}
        {/* Instruksi */}
        <div className="mt-6 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Instruksi Pembayaran
          </h2>

          <ol className="list-decimal space-y-2 pl-5 text-gray-700">
            <li>
              Transfer sesuai nominal yang tertera.
            </li>

            <li>
              Pastikan nama pengirim dapat
              diidentifikasi.
            </li>

            <li>
              Setelah transfer, kirim bukti pembayaran ke WhatsApp +6287885343817.
            </li>

            <li>
              Tim kami akan melakukan verifikasi
              maksimal 1 x 24 jam.
            </li>

            <li>
              Setelah pembayaran diverifikasi,
              akun perusahaan akan diaktifkan.
            </li>
          </ol>
        </div>

        {/* Bantuan */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">
            Butuh Bantuan?
          </h3>

          <p className="mt-2 text-blue-800">
            Jika mengalami kendala pembayaran,
            silakan hubungi kami melalui email
            atau WhatsApp.
          </p>

          <div className="mt-3 space-y-1">
            <p>
              Email:
              salesteamtrackerapp@gmail.com
            </p>

            <p>
              WhatsApp:
              +62 878-8534-3817
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}