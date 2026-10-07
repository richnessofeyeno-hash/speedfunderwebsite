import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const kickstarter = String(body.kickstarter || '').trim();
    const plan = String(body.plan || '').trim();

    if (!name || !email || !kickstarter || !plan) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 254 || kickstarter.length > 500 || plan.length > 120) {
      return NextResponse.json(
        { success: false, message: 'One or more submitted fields are too long.' },
        { status: 400 }
      );
    }

    if (!/^https?:\/\/(www\.)?kickstarter\.com\/.+/i.test(kickstarter)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid Kickstarter campaign URL.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Project request received.',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to process your request.' },
      { status: 400 }
    );
  }
}
