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

    if (
      name.length > 120 ||
      email.length > 254 ||
      kickstarter.length > 500 ||
      plan.length > 120
    ) {
      return NextResponse.json(
        { success: false, message: 'One or more submitted fields are too long.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!/^https?:\/\/(www\.)?kickstarter\.com\/.+/i.test(kickstarter)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid Kickstarter campaign URL.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { success: false, message: 'Email delivery is not configured yet.' },
        { status: 500 }
      );
    }

    const notificationEmail = `
      <h2>New SpeedFunders Project Request</h2>
      <p><strong>Creator Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Kickstarter:</strong> <a href="${kickstarter}">${kickstarter}</a></p>
      <p><strong>Service / Plan:</strong> ${plan}</p>
      <hr />
      <p>This project request was submitted through the SpeedFunders website.</p>
    `;

    const creatorEmail = `
      <h2>Thank You! Your Project Request Has Been Received.</h2>
      <p>Hi ${name},</p>
      <p>
        We’ve received your project details and our team will review your submission.
        A member of the SpeedFunders team will reach out to you shortly to discuss
        your campaign and the next steps.
      </p>
      <p><strong>Selected Service / Plan:</strong> ${plan}</p>
      <p>
        We appreciate you choosing SpeedFunders and look forward to learning more
        about your campaign.
      </p>
      <p>Best regards,<br />SpeedFunders Team</p>
    `;

const [teamResponse, creatorResponse] = await Promise.all([
  fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'SpeedFunders <team@speedfunders.com>',
      to: ['team@speedfunders.com'],
      reply_to: email,
      subject: `New Project Request — ${name}`,
      html: notificationEmail,
    }),
  }),

  fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'SpeedFunders <team@speedfunders.com>',
      to: [email],
      reply_to: ['team@speedfunders.com'],
      subject: 'Thank You! Your SpeedFunders Project Request Has Been Received',
      html: creatorEmail,
    }),
  }),
]);

    if (!teamResponse.ok || !creatorResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Your request could not be delivered. Please try again shortly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Project request received and delivered.',
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to process your request. Please try again.',
      },
      { status: 500 }
    );
  }
}
