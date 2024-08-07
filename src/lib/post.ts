export async function savePost(data:FormData) {
    'use server'

    const title = data.get('title')
    const description = data.get('description')

    const res = await fetch(`http://localhost:3001/api/post`,{
        method:'POST',
        body:JSON.stringify({title,description}),
        cache:'no-cache'
    })
    if(res.ok){
        const posts = await res.json()
        console.log(posts)
    }
}