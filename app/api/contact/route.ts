import config from "@/config";
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { email, name, message, token } = await request.json();
  const { contact, sendgridKey, name: appName } = config.app;
  let url = "https://www.google.com/recaptcha/api/siteverify";
  url = `${url}?secret=${config.app.captchaSecret}&response=${token}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const json = await res.json();

  if (json?.score < 0.51) {
    return NextResponse.json(
      { error: "Forbidden: Recaptcha rejected" },
      { status: 403 },
    );
  }

  const emailData = {
    to: contact,
    from: config.app.sendgridEmail,
    subject: `New inquiry for ${appName}`,
    html: `<h2>A new inquire has been received from ${name}</h2>
      <div>
        <span><b>Name:</b> ${name}</span><br />
        <span><b>Email address:</b> ${email}</span><br />
        <span><b>Message:</b></span><br />
        <span>${message}</span>
      </div>
    `,
  };

  sendgrid.setApiKey(sendgridKey);
  await sendgrid.send(emailData);

  return NextResponse.json({
    message: "Your inquiry has been sent successfully!",
  });
}
