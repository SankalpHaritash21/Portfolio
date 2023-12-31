import { EmailTemplateProps } from "@/types/type";
import * as React from "react";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  subject,
  message,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Thank you for reaching out. Your message with the subject `{subject}` has
      been received.
    </p>
    <p>
      We appreciate your interest in working together on a project.we must
      connect and start working!
    </p>
    <p>Best regards,</p>
    <p>Sankalp Haritash</p>
    <br />
    <br />
    <br />
    <br />
    <div>
      {firstName}: {message}
    </div>
  </div>
);

export default EmailTemplate;
