import React from "react";
import MenuItem from "./menuItem"


type MenuListProps = {
    menu_item: {
        title: string
        list: {
            title: string
            icon: React.ReactNode
            path: string
        }[]
    }
    pathname: string;
}



export default function MenuList({menu_item, pathname}: MenuListProps){
    return(
        <li className="space-y-3" >
            <h4 className="ml-7 text-xs text-[#556476] font-semibold" >{menu_item.title}</h4>
            <ul className="space-y-1" >
                {menu_item.list.map((item) => (
                    <li key={item.title} >
                        <MenuItem item={item} pathname={pathname} />
                    </li>
                ))}
            </ul>
        </li>
    )
}