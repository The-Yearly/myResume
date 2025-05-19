import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
export interface Session {
  uid: number;
  session: string;
}
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path.startsWith("/myResume")) {
    const cookiesStore = await cookies();
    const cookie = cookiesStore.get("creds");
    const logged: Session = JSON.parse(cookie?.value ?? "{}");
    const isLoggedIn = logged.session && logged.session !== "";
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/authentication", req.url));
    }
  }
  if (path.startsWith("/resume")) {
    const endPart = path.split("/")[path.split("/").length - 1];
    const id = parseInt(endPart);
    if (id) {
      const uname = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/getUser/" + id,
      );
      return NextResponse.redirect(
        new URL("/resume/" + uname.data.username, req.url),
      );
    }
  }
}

export const config = {
  matcher: ["/myResume(.*)", "/resume(.*)"],
};
