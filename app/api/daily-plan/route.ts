import { NextResponse } from 'next/server';

// POST: Menghasilkan rencana harian adaptif berdasarkan skor asesmen
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { score } = body;

    let plan = [];

    // Logika adaptif berdasarkan tingkat keparahan burnout
    if (score > 70) {
      plan = [
        "Ambil istirahat total (break) selama 15 menit setiap 2 jam bekerja.",
        "Lakukan teknik pernapasan dalam (mindful breathing) di pagi hari.",
        "Kurangi tugas non-esensial dan delegasikan jika memungkinkan.",
        "Tidur lebih awal malam ini untuk pemulihan energi."
      ];
    } else if (score > 40) {
      plan = [
        "Jadwalkan waktu istirahat sejenak di siang hari.",
        "Lakukan jalan santai ringan di sekitar area tempat tinggal.",
        "Tetapkan batasan jam kerja yang jelas hari ini."
      ];
    } else {
      plan = [
        "Pertahankan ritme kerja yang seimbang.",
        "Lakukan hobi atau aktivitas yang menyenangkan setelah jam kerja.",
        "Tetap terhidrasi dan jaga pola makan yang baik."
      ];
    }

    return NextResponse.json({ score, adaptivePlan: plan }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal membuat rencana harian adaptif' }, { status: 500 });
  }
}