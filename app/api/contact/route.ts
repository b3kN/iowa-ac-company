import config from "@/config";
import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { email, name, message } = await request.json();
  const { contact, sendgridKey, name: appName } = config.app;
  const emailData = {
    to: contact,
    from: "nick@illustrious.online",
    subject: `New inquiry at ${appName}`,
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
