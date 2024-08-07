async function getNumber(){
    const res = await fetch('http://localhost:3001/api/random',{
        cache:'force-cache',
        next:{
            revalidate:5
        }
    })
    const num = await res.json()
    return num
}

export default async function SSR() {
    const {random}:any = await getNumber()
    return (
        <div className="text-3xl font-semibold">{random}</div>
    );
}