'use client'

import { userStore } from "@/store/user";
import { useSearchParams } from "next/navigation";

export default function Products() {
    const search = useSearchParams()
    const user = userStore((state:any) => state.user)
    const updateUser = userStore((state:any) => state.updateUser)
    console.log(search)

    const newParams = search.get('new')
    return (
        <div>
            <p>{user.full_name}</p>
            <input className="border" type="text" name="name" id="name" onChange={(e)=>updateUser({
                full_name:e.target.value
            })} />
            <p>{newParams}</p>
        </div>
    );
}