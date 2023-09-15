import { NextResponse } from "next/server";
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
export async function POST(req, res) {
  const { searchParams } = new URL(req.url);
  let toEmail = searchParams.get("email");

  try {
    let Transporter = nodemailer.createTransport(
      smtpTransport({
        host: "mail.amitjs.com",
        port: 465,
        secure: true,
        auth: {
          user: "test@amitjs.com",
          pass: process.env.MAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      })
    );

    let myEmail = {
      from: "test@amitjs.com",
      to: toEmail,
      subject: "This is Subject",
      text: "This is Text",
    };

    let result = await Transporter.sendMail(myEmail);
    return NextResponse.json({ msg: "Success", result: result });
  } catch (e) {
    return NextResponse.json({ msg: "Fail" });
  }
}
