import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLogin = true

export default function middleware(req:NextRequest) {
    let header = new Headers(req.headers)
    let cookie = req.cookies.get('my-cookie')
    if(isLogin){
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/',req.url))
}

export const config = {
    matcher:['/profile']
}