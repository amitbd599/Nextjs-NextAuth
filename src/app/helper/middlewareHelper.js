import { NextResponse } from "next/server";
import { verifyToken } from "./JWTHelper";

// export async function CheckCookieAuth(req) {
//   try {
//     let token = req.cookies.get("token");
//     let payload = await verifyToken(token["value"]);
//     let requestHeader = new Headers(req.headers);
//     requestHeader.set("email", payload["email"]);
//     return NextResponse.next({
//       request: { headers: requestHeader },
//     });
//   } catch (e) {
//     console.log("EEEE");
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

export async function CheckCookieAuth(req) {
  const reqHeaders = new Headers(req.headers);
  const token = !!req.cookies.get("token");
  const tokenData = req.cookies.get("token");
  const githubSession = !!req.cookies.get("next-auth.csrf-token");
  console.log(githubSession);
  console.log(token);
  if (token === false && githubSession === false) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (token) {
    let payload = await verifyToken(tokenData["value"]);
    let email = payload["email"];
    reqHeaders.set("email", email);
    return NextResponse.next({ request: { headers: reqHeaders } });
  } else if (githubSession) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
