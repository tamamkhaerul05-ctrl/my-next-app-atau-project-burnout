"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, Smile, Meh, Frown, Search, ChevronRight, Trash2, ArrowLeft } from "lucide-react";

// Mock data riwayat jurnal pengguna
const initialJournals = [
  {
    id: 1,
    date: "17 Oktober 2026",
    mood: "happy",
    moodEmoji: "😊",
    title: "Mulai Merasa Lebih Baik",
    snippet: "Hari ini mencoba untuk berjalan pagi dan menyelesaikan tugas frontend dengan tenang...",
    category: "Pekerjaan",
  },
  {
    id: 2,
    date: "15 Oktober 2026",
    mood: "neutral",
    moodEmoji: "😐",
    title: "Cukup Melelahkan",
    snippet: "Banyak koordinasi hari ini, rasanya energi terkuras tapi masih bisa diatasi...",
    category: "Akademik",
  },
  {
    id: 3,
    date: "12 Oktober 2026",
    mood: "sad",
    moodEmoji: "😔",
    title: "Burnout Datang Lagi",
    snippet: "Merasa kewalahan dengan deadline tugas kuliah dan pekerjaan di lapangan secara bersamaan...",
    category: "Kesehatan Mental",
  },
];

export default function JournalHistoryPage() {
  const [journals, setJournals] = useState(initialJournals);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJournals = journals.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setJournals(journals.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f8faf8] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header & Navigasi */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e8f5e9] text-[#005a36] dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <BookOpen className="w-3.5 h-3.5" /> Jurnal Pribadi
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#004d2e] dark:text-emerald-400 tracking-tight mt-1">
              Riwayat Jurnal & Refleksi
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Lihat kembali perjalanan emosi dan catatan harian yang telah Anda tulis.
            </p>
          </div>
        </div>

        {/* Kotak Pencarian */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari riwayat jurnal berdasarkan judul atau kategori..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500 transition-all shadow-2xs"
          />
        </div>

        {/* Daftar Riwayat Jurnal */}
        <div className="space-y-3">
          {filteredJournals.length > 0 ? (
            filteredJournals.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      {item.moodEmoji}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800/40">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 pl-1">
                    {item.snippet}
                  </p>
                </div>

                {/* Aksi */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                    title="Hapus Jurnal"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#005a36] hover:bg-[#004227] text-white text-xs font-medium transition-all shadow-2xs cursor-pointer"
                  >
                    Baca Selengkapnya <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Tidak ada riwayat jurnal yang ditemukan.
              </p>
              <p className="text-xs text-slate-400">
                Coba gunakan kata kunci pencarian yang lain.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}