import { NextResponse } from "next/server";

export async function GET(req:Request) {
    return NextResponse.json({
        random:Math.floor((Math.random() * (1000-100)) + 100)
    });
}