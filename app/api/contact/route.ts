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
  <div style="
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
    line-height: 1.5;
  ">

    <h2 style="
      font-size: 23px;
      margin: 0 0 18px 0;
    ">
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

    <p style="margin: 0 0 10px 0;">
      Best regards,
    </p>

    <!-- SPEEDFUNDERS SIGNATURE -->
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="
        width: 100%;
        max-width: 700px;
        background-color: #00150f;
        color: #f5f2e8;
      "
    >
      <tr>
        <td style="
          padding: 16px 14px 14px 14px;
        ">

          <!-- LOGO + BRAND + SOCIAL -->
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            style="width: 100%;"
          >
            <tr>

              <!-- LOGO -->
              <td style="
                width: 70px;
                min-width: 70px;
                vertical-align: top;
                padding-right: 12px;
              ">
                <img
                  src="https://raw.githubusercontent.com/richnessofeyeno-hash/speedfunderwebsite/main/public/logo-circle.png"
                  alt="SpeedFunders"
                  width="66"
                  style="
                    display: block;
                    width: 66px;
                    height: auto;
                    border: 0;
                  "
                />
              </td>

              <!-- BRAND / TAGLINE / SOCIAL -->
              <td style="
                vertical-align: top;
                width: auto;
              ">

                <!-- BRAND -->
                <div style="
                  font-size: 22px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  color: #f5f2e8;
                  line-height: 1.05;
                  white-space: nowrap;
                ">
                  SPEEDFUNDERS
                </div>

                <!-- TAGLINE -->
                <div style="
                  margin-top: 5px;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1.1px;
                  color: #b8c9bd;
                  line-height: 1.15;
                  white-space: nowrap;
                ">
                  YOUR FASTEST FUNDING PARTNERS
                </div>

                <!-- SOCIAL MEDIA -->
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    margin-top: 10px;
                  "
                >
                  <tr>

                    <!-- FACEBOOK -->
                    <td style="padding-right: 18px;">
                      <a
                        href="https://www.facebook.com/speedfunders"
                        style="
                          text-decoration: none;
                          color: #f5f2e8;
                          font-size: 12px;
                          white-space: nowrap;
                        "
                      >
                        <span style="
                          font-size: 18px;
                          font-weight: bold;
                          vertical-align: middle;
                        ">f</span>
                        <span style="
                          margin-left: 4px;
                          vertical-align: middle;
                        ">Facebook</span>
                      </a>
                    </td>

                    <!-- INSTAGRAM -->
                    <td style="padding-right: 18px;">
                      <a
                        href="https://www.instagram.com/speedfunders"
                        style="
                          text-decoration: none;
                          color: #f5f2e8;
                          font-size: 12px;
                          white-space: nowrap;
                        "
                      >
                        <span style="
                          font-size: 17px;
                          font-weight: bold;
                          vertical-align: middle;
                        ">◎</span>
                        <span style="
                          margin-left: 4px;
                          vertical-align: middle;
                        ">Instagram</span>
                      </a>
                    </td>

                    <!-- X -->
                    <td>
                      <a
                        href="https://twitter.com/speedfunders"
                        style="
                          text-decoration: none;
                          color: #f5f2e8;
                          font-size: 12px;
                          white-space: nowrap;
                        "
                      >
                        <span style="
                          font-size: 17px;
                          vertical-align: middle;
                        ">𝕏</span>
                        <span style="
                          margin-left: 4px;
                          vertical-align: middle;
                        ">X</span>
                      </a>
                    </td>

                  </tr>
                </table>

              </td>

            </tr>
          </table>

          <!-- ADDRESS -->
          <div style="
            margin-top: 12px;
            width: 100%;
            font-size: 9px;
            font-weight: 600;
            letter-spacing: 0;
            color: #d8ddd9;
            line-height: 1.2;
            white-space: nowrap;
          ">
            447 Broadway, 2nd Floor&nbsp;•&nbsp;New York, NY 10013, United States
          </div>

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
