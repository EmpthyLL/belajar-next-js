// "use client"
import { capitalize } from "@/lib/capitalize";
// import { useParams } from "next/navigation";
// import { useRouter } from "next/navigation";

async function getData(postid:string) {
    const post = await fetch(`http://localhost:3001//api/post/${postid}`,{
        method:'GET',
    })
    return post.json()
}

export async function generateMetadata({params}:any) {
    const {post} = await getData(params.postid)
    return {
        title: post?post.title:'judul aja',
        description: post?post.description:'deskripsi aja'
    }
}

export default async function PostID({params,searchParams}:{
    params:{
        username:string,
        postid:string
    },
    searchParams:any
}) {
    // const params = useParams()
    // const router = useRouter()
    const {post} = await getData(params.postid)
    console.log(searchParams)
    return (
        <div>
            <h2>This is Post {params.postid} On {capitalize(params.username)} Profile</h2>
            <p>comment : {searchParams.comment}</p>
            <p>title : {post?post.title:'judul aja'}</p>
            <p>description : {post?post.description:'deskripsi aja'}</p>
            {/* <p className="hover:cursor-pointer" onClick={()=>router.back()}>Back</p> */}
        </div>
    );
}