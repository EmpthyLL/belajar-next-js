import { NextResponse } from "next/server";
import {v4} from "uuid"

const posts: any = [
    {
        id:12,
        title:'Hello',
        description:'YAAA a post',
    }
]

export async function POST(req:Request) {
    const body = await req.json()
    if(!body.title || !body.description){
        return NextResponse.error()
    }
    posts.push({
        id:v4(),
        title:body.title,
        description:body.description
    })
    console.log(posts)
    return NextResponse.json({
        posts
    })
}