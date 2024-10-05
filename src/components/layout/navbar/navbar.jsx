"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

import MenuItem from "./menuItem";
import SignOutButton from "../../ui/signOutButton";


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
                MenuItems.map(item => <MenuItem  key={item.title} item={item} pathname={pathname}/>
            )}
        </ul>
        <SignOutButton/>
        </nav>
    ) 
}

export default Navbar;