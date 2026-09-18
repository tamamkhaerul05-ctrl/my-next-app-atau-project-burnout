import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Mengambil status keamanan berdasarkan email
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email diperlukan' }, { status: 400 });
    }

    let security = await prisma.userSecurity.findUnique({
      where: { email },
    });

    if (!security) {
      // Jika belum ada, buat data default
      security = await prisma.userSecurity.create({
        data: {
          email,
          twoFactorAuth: false,
          encryptionKey: Math.random().toString(36).substring(2),
        },
      });
    }

    return NextResponse.json(security, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data keamanan' }, { status: 500 });
  }
}

// POST / PUT: Memperbarui status 2FA atau enkripsi
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, twoFactorAuth } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email diperlukan' }, { status: 400 });
    }

    const updatedSecurity = await prisma.userSecurity.upsert({
      where: { email },
      update: { twoFactorAuth },
      create: {
        email,
        twoFactorAuth: twoFactorAuth ?? false,
        encryptionKey: Math.random().toString(36).substring(2),
      },
    });

    return NextResponse.json(updatedSecurity, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal memperbarui pengaturan keamanan' }, { status: 500 });
  }
}