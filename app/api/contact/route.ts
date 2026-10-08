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
  <div style="font-family: Arial, Helvetica, sans-serif; color: #222; line-height: 1.6;">
    <h2 style="font-size: 24px; margin-bottom: 20px;">
      Thank You! Your Project Request Has Been Received.
    </h2>

    <p>Hi ${name},</p>

    <p>
      We’ve received your project details and our team will review your submission.
      A member of the SpeedFunders team will reach out to you shortly to discuss
      your campaign and the next steps.
    </p>

    <p>
      <strong>Selected Service / Plan:</strong> ${plan}
    </p>

    <p>
      We appreciate you choosing SpeedFunders and look forward to learning more
      about your campaign.
    </p>

    <p style="margin-bottom: 12px;">
      Best regards,
    </p>

    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="max-width: 700px; background-color: #00150f; color: #f5f2e8;"
    >
      <tr>
        <td style="padding: 28px 30px 20px 30px;">

          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="vertical-align: middle; padding-right: 22px;">
                <img
                  src="https://raw.githubusercontent.com/richnessofeyeno-hash/speedfunderwebsite/main/public/logo-circle.png"
                  alt="SpeedFunders"
                  width="115"
                  style="display: block; border: 0;"
                />
              </td>

              <td style="vertical-align: middle;">
                <div style="
                  font-size: 30px;
                  font-weight: 700;
                  letter-spacing: 3px;
                  color: #f5f2e8;
                  line-height: 1.2;
                ">
                  SPEEDFUNDERS
                </div>
              </td>
            </tr>
          </table>

          <div style="
            margin-top: 30px;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #f5f2e8;
          ">
            YOUR FASTEST FUNDING PARTNERS
          </div>

          <div style="
            margin-top: 28px;
            font-size: 17px;
            line-height: 1.7;
            color: #d8ddd9;
          ">
            447 Broadway, 2nd Floor<br />
            New York, NY 10013, United States
          </div>

          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="margin-top: 28px;"
          >
            <tr>

              <td style="padding-right: 28px;">
                <a
                  href="https://www.facebook.com/speedfunders"
                  style="text-decoration: none; color: #f5f2e8;"
                >
                  <span style="
                    font-size: 25px;
                    font-weight: bold;
                    vertical-align: middle;
                  ">f</span>
                  <span style="
                    font-size: 17px;
                    margin-left: 8px;
                    vertical-align: middle;
                  ">Facebook</span>
                </a>
              </td>

              <td style="padding-right: 28px;">
                <a
                  href="https://www.instagram.com/speedfunders"
                  style="text-decoration: none; color: #f5f2e8;"
                >
                  <span style="
                    font-size: 23px;
                    font-weight: bold;
                    vertical-align: middle;
                  ">◎</span>
                  <span style="
                    font-size: 17px;
                    margin-left: 8px;
                    vertical-align: middle;
                  ">Instagram</span>
                </a>
              </td>

              <td>
                <a
                  href="https://twitter.com/speedfunders"
                  style="text-decoration: none; color: #f5f2e8;"
                >
                  <span style="
                    font-size: 23px;
                    font-weight: bold;
                    vertical-align: middle;
                  ">𝕏</span>
                  <span style="
                    font-size: 17px;
                    margin-left: 8px;
                    vertical-align: middle;
                  ">X</span>
                </a>
              </td>

            </tr>
          </table>

        </td>
      </tr>
    </table>
  </div>
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
