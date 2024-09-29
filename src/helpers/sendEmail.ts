import { EMAIL_ADRESS, RESEND_API_KEY } from "@/config/smtp";
import ContactEmailTemplate from "@/custom-templates/ContactEmailTemplate";
import { Resend } from "resend";
import { ContactRequestType } from "@/types/type";
import ReactDOMServer from "react-dom/server";

const resend = new Resend(RESEND_API_KEY);

const sendEmail = async (payload: ContactRequestType) => {
  try {
    const res = await resend.emails.send({
      from: EMAIL_ADRESS || "contact@recep-tok.com",
      to: "rcptok25@gmail.com",
      subject: "Contact Request",
      html: ReactDOMServer.renderToString(ContactEmailTemplate(payload)),
    });

    if (res.error) {
      console.error("Email sending error:", res.error);
      throw new Error(JSON.stringify(res.error));
    }

    return res; // `const` ile kaydetmek yok, doğrudan `res` döndürülüyor
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
