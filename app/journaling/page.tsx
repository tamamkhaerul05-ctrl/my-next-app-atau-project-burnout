'use client';

import { useState } from 'react';

export default function JournalingPage() {
  const [mood, setMood] = useState('Tenang');
  const [note, setNote] = useState('');
  const [savedList, setSavedList] = useState<{ mood: string; note: string; date: string }[]>([]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;

    const newEntry = {
      mood,
      note,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    setSavedList([newEntry, ...savedList]);
    setNote('');
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-6">
            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
              Refleksi Harian 📝
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-3">Catat Suasana Hati & Jurnal</h1>
            <p className="text-sm text-gray-500 mt-1">Luangkan waktu sejenak untuk menuangkan isi pikiranmu hari ini.</p>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bagaimana perasaanmu hari ini?</label>
              <div className="grid grid-cols-3 gap-3">
                {['Tenang 😌', 'Lelah 🔋', 'Stres 🤯'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setMood(item)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition ${
                      mood === item 
                        ? 'border-teal-600 bg-teal-50 text-teal-700 shadow-sm' 
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Catatan Refleksi</label>
              <textarea
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Apa hal yang membebani atau yang kamu syukuri hari ini?"
                className="w-full rounded-xl border border-gray-200 p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition shadow-sm"
            >
              Simpan Jurnal 💾
            </button>
          </form>
        </div>

        {savedList.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Riwayat Jurnal Terbaru</h2>
            {savedList.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>{item.date}</span>
                  <span className="bg-teal-100 text-teal-800 font-semibold px-2.5 py-0.5 rounded-full">{item.mood}</span>
                </div>
                <p className="text-gray-700 text-sm whitespace-pre-wrap">{item.note}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}