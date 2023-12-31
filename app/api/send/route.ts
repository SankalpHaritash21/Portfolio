import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromE = process.env.FROM_EMAIL;

export async function POST(req: any, res: any) {
  const { name, email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: fromE!,
      to: [fromE!, email],
      subject: subject,
      react: EmailTemplate({
        firstName: name,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
