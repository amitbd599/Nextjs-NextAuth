import { NextResponse } from "next/server";
import { tokenCookie } from "../../helper/TokenCookie";

import { cookies } from "next/headers";

export async function POST(req, res) {
  let json = await req.json();
  let email = json["email"];
  let password = json["password"];

  if (email === "amitbd590@gmail.com" && password === "123") {
    let cookie = await tokenCookie(email);

    return NextResponse.json(
      {
        status: true,
        msg: "login Success",
      },
      {
        status: 201,
        headers: cookie,
      }
    );
  } else {
    return NextResponse.json({
      status: false,
      msg: "login Fail",
    });
  }
}

// Logout

export async function GET(req, res) {
  cookies().delete("token");

  return NextResponse.json({
    status: true,
    msg: "Logout successful",
  });
}
