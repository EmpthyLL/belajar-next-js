"use client"

import { useEffect, useState } from "react"


export default function SSR() {
    const [rando, setRando] = useState(null)

    async function getNumber(){
        const res = await fetch('/api/random',{
            cache:'no-store'
        })
        const {random} = await res.json()
        setRando(random)
    }

    useEffect(() => {
        getNumber()
    },[])

    return (
        <div className="text-3xl font-semibold">{rando}</div>
    );
}