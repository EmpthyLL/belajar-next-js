"use client"

import { Gupter } from "next/font/google";
import { createContext, useContext, useState } from "react";

const inter = Gupter({weight:'400', subsets: ["latin"] });

type Context = {

}

const AppContext = createContext<any>(undefined)

export function AppWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    let [state, setState] = useState('Ganja enak')
    return (
        <AppContext.Provider value={{
          state,setState
        }}>
            {children}
        </AppContext.Provider>
    )
  }

export function useAppContext(){
    return useContext(AppContext)
}