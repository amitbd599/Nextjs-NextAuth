import { CheckCookieAuth } from "./app/helper/middlewareHelper";

export async function middleware(req, res, next) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
  }

  // if (req.nextUrl.pathname.startsWith("/dashboard")) {
  //   const session = !!req.cookies.get("next-auth.session-token");
  //   if (!session) {
  //     return NextResponse.redirect(new URL("/signin", req.url));
  //   } else {
  //     return NextResponse.next();
  //   }
  // }

  // return NextResponse.next();
}
