export default function DownloadPage() {
  const apkUrl = "/downloads/salesteamtracker-v1.0.0.apk";

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          Download Salesman App
        </h1>

        <p className="mb-6 text-slate-600">
          Silakan download dan install aplikasi Salesman untuk Android.
        </p>

        <div className="mb-6 rounded-lg border bg-slate-50 p-4">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Cara Install di Android
          </h2>

          <ol className="list-decimal space-y-2 pl-5 text-slate-700">
            <li>Klik tombol download APK di bawah.</li>
            <li>Tunggu sampai file selesai di download.</li>
            <li>Buka file APK yang sudah di download.</li>
            <li>
              Jika muncul peringatan, pilih <b>Izinkan / Allow</b>.
            </li>
            <li>Tekan <b>Install</b>.</li>
            <li>Setelah selesai, buka aplikasi dari layar utama HP.</li>
          </ol>
        </div>

        <a
          href={apkUrl}
          download
          className="block w-full rounded-lg bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700"
        >
          Download APK
        </a>

        <p className="mt-4 text-center text-sm text-slate-500">
          Versi: 1.0.0
        </p>

        <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold text-yellow-900">
            Catatan Penting
          </h3>

          <p className="text-sm text-yellow-800">
            Download hanya dari halaman resmi ini. Jangan install APK dari link
            yang tidak dikenal.
          </p>
        </div>
      </div>
    </div>
  );
}