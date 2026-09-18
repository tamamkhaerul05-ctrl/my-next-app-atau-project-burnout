import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Mengambil riwayat percakapan Companion
export async function GET() {
  try {
    const chats = await prisma.companionChat.findMany({
      orderBy: { createdAt: 'asc' },
    });
    return NextResponse.json(chats, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil riwayat obrolan' }, { status: 500 });
  }
}

// POST: Mengirim pesan baru ke Companion dan mendapatkan respons
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    // 1. Simpan pesan dari user ke database
    const userMessage = await prisma.companionChat.create({
      data: {
        message,
        sender: 'user',
      },
    });

    // 2. Simulasi respons dari Companion AI berdasarkan pesan
    let replyText = "Aku mendengarmu. Ceritakan lebih banyak jika kamu merasa lelah, ya.";
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('lelah') || lowerMsg.includes('capek')) {
        replyText = "Wajar sekali merasa lelah. Bagaimana kalau kita ambil jeda sejenak untuk menarik napas dalam-dalam?";
    } else if (lowerMsg.includes('stres') || lowerMsg.includes('beban')) {
        replyText = "Pekerjaan atau tugas ini memang berat. Mari kita urai satu per satu perlahan agar terasa lebih ringan.";
    }

    // 3. Simpan respons companion ke database
    const companionMessage = await prisma.companionChat.create({
      data: {
        message: replyText,
        sender: 'companion',
      },
    });

    return NextResponse.json({ userMessage, companionMessage }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal memproses pesan Companion' }, { status: 500 });
  }
}