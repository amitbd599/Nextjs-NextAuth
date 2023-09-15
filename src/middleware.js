import { CheckCookieAuth } from "./app/helper/middlewareHelper";

export async function middleware(req, res, next) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
  }

}
