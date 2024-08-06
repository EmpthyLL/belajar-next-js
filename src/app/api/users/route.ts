import { NextResponse } from "next/server"
import data from '@/data.json'

export async function GET(req:Request, context:any) {
    return NextResponse.json({
        data
    })
}