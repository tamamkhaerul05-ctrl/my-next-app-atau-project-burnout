import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-1.5 rounded-full">
          Pencegahan & Pemulihan Stres Kerja 🧠
        </span>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Kenali Batasmu, Pulihkan Energimu bersama <span className="text-teal-600">Project Burnout</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Platform interaktif untuk mendeteksi tingkat kejenuhan kerja, memantau suasana hati harian, dan mendapatkan rencana pemulihan yang dipersonalisasi khusus untukmu.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link 
            href="/asesmen" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            Mulai Asesmen Mandiri 🚀
          </Link>
          <Link 
            href="/journaling" 
            className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-medium px-6 py-3 rounded-xl shadow-sm transition"
          >
            Catat Journal Hari Ini 📝
          </Link>
        </div>
      </div>
    </main>
  );
}