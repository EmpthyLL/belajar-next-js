"use client"
import { capitalize } from "@/lib/capitalize";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { comment } from "postcss";

export default function Post() {
    const params = useParams()
    const router = useRouter()
    return (
        <div>
            <h1>This is {capitalize(params.username)} Post Page</h1>
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