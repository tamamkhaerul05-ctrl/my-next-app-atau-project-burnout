import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Mengambil riwayat data jurnal
export async function GET() {
  try {
    const journals = await prisma.journal.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(journals, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data jurnal' }, { status: 500 });
  }
}

// POST: Menyimpan data jurnal baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { mood, note } = body;

    const newJournal = await prisma.journal.create({
      data: {
        mood,
        note,
      },
    });

    return NextResponse.json(newJournal, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menyimpan data jurnal' }, { status: 500 });
  }
}