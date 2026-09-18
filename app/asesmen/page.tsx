'use client';

import { useState } from 'react';

export default function AsesmenPage() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (points: number) => {
    setScore(prev => prev + points);
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const resetAssessment = () => {
    setStep(1);
    setScore(0);
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-8">
          <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
            Fitur Utama 🧠
          </span>
          <h1 className="text-2xl font-bold text-gray-900 mt-3">Asesmen Deteksi Dini Burnout</h1>
          <p className="text-sm text-gray-500 mt-1">Jawab pertanyaan berikut jujur sesuai kondisi kerjamu minggu ini.</p>
        </div>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-teal-600">Pertanyaan {step} dari 3</span>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div 
                  className="bg-teal-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-lg font-medium text-gray-800 mb-6">
              {step === 1 && "1. Seberapa sering kamu merasa kelelahan fisik maupun emosional sepulang bekerja?"}
              {step === 2 && "2. Apakah kamu merasa motivasi kerjamu menurun drastis akhir-akhir ini?"}
              {step === 3 && "3. Seberapa sering kamu merasa cemas atau tertekan memikirkan pekerjaan di luar jam kerja?"}
            </h2>

            <div className="space-y-3">
              <button 
                onClick={() => handleAnswer(1)}
                className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-teal-500 hover:bg-teal-50/50 transition text-gray-700 font-medium"
              >
                Jarang / Tidak Pernah
              </button>
              <button 
                onClick={() => handleAnswer(2)}
                className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-teal-500 hover:bg-teal-50/50 transition text-gray-700 font-medium"
              >
                Kadang-kadang
              </button>
              <button 
                onClick={() => handleAnswer(3)}
                className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-teal-500 hover:bg-teal-50/50 transition text-gray-700 font-medium"
              >
                Sering / Selalu
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              {score}
            </div>
            <h2 className="text-xl font-bold text-gray-900">Hasil Asesmen Selesai</h2>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              {score <= 4 && "Kondisimu tampak cukup baik dan terkendali. Tetap jaga keseimbangan kerja dan istirahat!"}
              {score > 4 && score <= 7 && "Kamu mulai menunjukkan tanda-tanda kelelahan kerja sedang. Pertimbangkan untuk mengambil jeda relaksasi."}
              {score > 7 && "Skor menunjukkan tingkat kelelahan yang tinggi (Burnout). Sangat disarankan untuk meluangkan waktu pemulihan dan menggunakan fitur pendukung lainnya."}
            </p>
            <button
              onClick={resetAssessment}
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2.5 rounded-xl transition shadow-sm text-sm"
            >
              Ulangi Asesmen 🔄
            </button>
          </div>
        )}
      </div>
    </main>
  );
}