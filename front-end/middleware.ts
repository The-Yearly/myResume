import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
export interface Session{
    uid:number
    session:string
}
export async function middleware(req: NextRequest) {
    const cookiesStore=await cookies()
    const cookie=cookiesStore.get("creds")
    const logged:Session=JSON.parse(cookie?.value ?? '{}')
    const isLoggedIn = logged.session && logged.session !== "";
    if(!isLoggedIn){
        return NextResponse.redirect(new URL("/authentication", req.url));
    }
}

export const config = {
    matcher: "/myResume(.*)",
};

