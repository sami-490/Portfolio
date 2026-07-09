import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const adminUser = process.env.ADMIN_USER;
    const adminPass = process.env.ADMIN_PASS;
    const jwtSecret = process.env.JWT_SECRET || 'fallback_secret';

    if (!adminUser || !adminPass) {
      return NextResponse.json(
        { message: 'Admin credentials not configured on server' },
        { status: 500 }
      );
    }

    if (username === adminUser && password === adminPass) {
      const token = jwt.sign({ id: 'admin' }, jwtSecret, { expiresIn: '1d' });
      return NextResponse.json({ token }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
