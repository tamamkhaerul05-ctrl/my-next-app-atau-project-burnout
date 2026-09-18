export default function EdukasiPage() {
  const articles = [
    {
      title: "Mengenal Gejala Awal Burnout di Lingkungan Kerja",
      category: "Deteksi Dini",
      readTime: "4 menit baca",
      desc: "Pelajari tanda-tanda fisik dan emosional ketika stres kerja mulai berubah menjadi kejenuhan kronis."
    },
    {
      title: "Teknik Pernapasan 4-7-8 untuk Meredakan Kecemasan Instan",
      category: "Relaksasi",
      readTime: "3 menit baca",
      desc: "Latihan pernapasan sederhana yang dapat dilakukan di meja kerja untuk menenangkan sistem saraf dengan cepat."
    },
    {
      title: "Menetapkan Batasan Sehat (Work-Life Boundaries)",
      category: "Produktivitas",
      readTime: "5 menit baca",
      desc: "Cara profesional untuk membatasi komunikasi pekerjaan di luar jam kantor demi menjaga kesehatan mental."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
            Pusat Pengetahuan 📚
          </span>
          <h1 className="text-3xl font-bold text-gray-900">Psikoedukasi & Tips Pemulihan</h1>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Kumpulan artikel dan panduan praktis untuk membantumu memahami serta mengelola stres kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between space-y-4 hover:border-teal-500 transition">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="bg-teal-50 text-teal-700 font-semibold px-2.5 py-1 rounded-md">{item.category}</span>
                  <span className="text-gray-400">{item.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 leading-snug">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              <button className="text-teal-600 hover:text-teal-700 text-sm font-semibold text-left pt-2">
                Baca Selengkapnya &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}