import { NextResponse } from "next/server"
import data from '@/data.json'

export async function GET(req:Request, context:any) {
    const {params} = context
    const user = data.filter(d => Number(params.userid) === d.id)
    return NextResponse.json({
        user
    })
}