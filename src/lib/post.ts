export async function savePost(data:FormData) {
    const title = data.get('title')
    const description = data.get('description')

    const res = await fetch(`http://localhost:3000/api/post`,{
        method:'POST',
        body:JSON.stringify({title,description}),
        cache:'no-cache'
    })
    if(res.ok){
        const posts = await res.json()
        console.log(posts)
    }
}