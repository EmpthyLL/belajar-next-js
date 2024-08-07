import { create } from 'zustand'

export const userStore = create((set) => ({
    user:{
        full_name : 'Howard'
    },
    updateUser(newUser:any) {
        set((state:any) => ({
            user:{...state.user, ...newUser}
        })
    )},
    fetchUser: async () => {
         const res = await fetch("/api/user")
         const data = await res.json()
         set({user:data})
    }
}))