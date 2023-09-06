import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth';

export async function PUT(req, res) {
  const session = await getServerSession(authOptions);

  console.log('session', session);

  // TODO: get body from request then call prisma upsert in Todo table

  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
