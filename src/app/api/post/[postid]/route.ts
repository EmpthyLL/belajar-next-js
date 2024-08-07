import { NextResponse } from "next/server";

const posts: any = [
    {
        id:12,
        title:'Hello',
        description:'YAAA a post',
    }
]

export async function GET(req:Request, context:any) {
    const {params} = context
    return NextResponse.json({
        post:posts.find((p:any) => p.id === Number(params.postid))
    })
}