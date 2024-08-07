"use client"

import { capitalize } from "@/lib/capitalize";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { savePost } from "@/lib/post";

export default function Post({params}:{
    params:{
        username:string,
        postid:string
    }
}) {
    const router = useRouter()
    // async function savePost(data:FormData) {
    //     'use server'

    //     const title = data.get('title')
    //     const description = data.get('description')

    //     const res = await fetch(`http://localhost:3000/api/post`,{
    //         method:'POST',
    //         body:JSON.stringify({title,description}),
    //         cache:'no-cache'
    //     })
    //     if(res.ok){
    //         const posts = await res.json()
    //         console.log(posts)
    //     }
    // }
    return (
        <div>
            <h1>This is {capitalize(params.username)} Post Page</h1>
            <form className="flex flex-col w-[200px] m-2" action={savePost}>
                <input type="text" name="title" id="title" className="border" />
                <textarea name="description" id="description" className="border" />
                <button className="bg-blue-500 py-2 px-1 rounded text-white">Post</button>
            </form>
            <ul>
                <li className="hover:cursor-pointer" onClick={()=>router.push(`/profile/${params.username}/post/1`)}>Post 1</li>
                <li className="hover:cursor-pointer" onClick={()=>router.push(`/profile/${params.username}/post/2`)}>Post 2</li>
                <li className="hover:cursor-pointer" onClick={()=>router.push(`/profile/${params.username}/post/3`)}>Post 3</li>
                <li><Link href={
                    {
                        pathname:`/profile/${params.username}/post/4`,
                        query:{
                            comment:2
                        }
                    }
                    }>Post 4</Link></li>
                <li><Link href={`/profile/${params.username}/post/5`}>Post 5</Link></li>
                <li><Link href={`/profile/${params.username}/post/6`}>Post 4</Link></li>
            </ul>
        </div>
    );
}