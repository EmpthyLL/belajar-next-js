"use client"

import Logo from "./logo"
import Menu from "./menu";



export default function Header(props:any) {
    return (
        <header className="p-4 flex items-center justify-between">
            <div>Header Item</div>
            <Menu {...props} />
            {props.children}
        </header>
    );
}