"use client"
import { capitalize } from "@/lib/capitalize";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

async function getData(postid:string) {
    const post = await fetch(`/api/posts/${postid}`,{
        method:'GET'
    })
    return post.json()
}

export async function generateMetadata({params}:any) {
    const {post} = await getData(params.postid)
    return {
        title: post[0].title,
        description: post[0].description
    }
}

export default function PostID() {
    const params = useParams()
    const router = useRouter()
    return (
        <div>
            <h1>This is Post {params.postid} On {capitalize(params.username)} Profile</h1>
            <p className="hover:cursor-pointer" onClick={()=>router.back()}>Back</p>
        </div>
    );
}