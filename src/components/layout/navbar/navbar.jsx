"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { signOut } from "@/lib/actions";

import { LuLogOut } from "react-icons/lu";  
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

import MenuList from "./menuList";


const MenuItems = [
    {
        title: "MENU",
        list: [
            {
                title: "Dashboard",
                icon: <LuLayoutDashboard />,
                path: "/dashboard",
            },
            {
                title: "Accounts",
                icon: <HiOutlineOfficeBuilding />,
                path: "/dashboard/accounts",
            },
            {
                title: "Users",
                icon: <FaRegUser />,
                path: "/users",
            }
        ]
    },
    {
        title: "LEADS",
        list: [
            {
                title: "Contacts",
                icon: <IoPersonAddOutline />,
                path: "/dashboard/contacts",
            },
            {
                title: "Leads",
                icon: <RiGroupLine />,
                path: "/dashboard/leads",
            }
        ]
    }
]

const Navbar = () => {

    const pathname = usePathname()

    return(
       <nav className="py-12 h-screen flex flex-col justify-between border-r" >
        <Link href={'/dashboard'} className="ml-7 font-bold text-green-700 text-xl">Logo</Link>
        <ul className="space-y-12" >
            {
                MenuItems.map(item => (
                    <MenuList menu_item={item} pathname={pathname}/>
                ))}
            </ul>
        <SignOutButton/>
        </nav>
    ) 
}

export default Navbar;

  


function SignOutButton(){
    return(
        <button onClick={()=>signOut()} className={`flex space-x-2 items-center text-[#556476] py-3 pl-7 pr-14 hover:text-[#4A58EC] hover:bg-[#F4F7FF]`}>
            <LuLogOut />
            <p>Logout</p>
        </button>
    )
}




