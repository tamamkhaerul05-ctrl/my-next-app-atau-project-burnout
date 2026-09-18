export default function LaporanPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
            Rekapitulasi 📊
          </span>
          <h1 className="text-3xl font-bold text-gray-900">Laporan & Tren Kesehatan Mental</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Pantau perkembangan tingkat stres dan riwayat asesmenmu secara berkala di sini.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Ringkasan Bulan Ini</h2>
              <p className="text-xs text-gray-400 mt-0.5">September 2026</p>
            </div>
            <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-xl border border-teal-100">
              Status: Stabil 🟢
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <p className="text-xs text-gray-500 font-medium">Total Asesmen</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3 Kali</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <p className="text-xs text-gray-500 font-medium">Rata-rata Skor</p>
              <p className="text-2xl font-bold text-teal-600 mt-1">4.2 (Aman)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <p className="text-xs text-gray-500 font-medium">Catatan Jurnal</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">5 Entri</p>
            </div>
          </div>

          <div className="pt-2">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Grafik Tren Mingguan</h3>
            <div className="h-40 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
              Visualisasi Grafik Tren Stres (Akan terhubung dengan database)
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}