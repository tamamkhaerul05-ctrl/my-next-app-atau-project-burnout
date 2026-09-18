import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Mengambil riwayat data asesmen
export async function GET() {
  try {
    const assessments = await prisma.assessment.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(assessments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data asesmen' }, { status: 500 });
  }
}

// POST: Menyimpan data asesmen baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { score, result } = body;

    const newAssessment = await prisma.assessment.create({
      data: {
        score,
        result,
      },
    });

    return NextResponse.json(newAssessment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menyimpan data asesmen' }, { status: 500 });
  }
}