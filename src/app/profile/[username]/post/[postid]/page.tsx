"use client"
import { capitalize } from "@/lib/capitalize";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

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