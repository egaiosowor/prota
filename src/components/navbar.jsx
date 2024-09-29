"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

import SignOutButton from "./ui/signOutButton";


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
            {MenuItems.map((item) => (
                    <li key={item.title} className="space-y-3" >
                        <h4 className="ml-7 text-xs text-[#556476] font-semibold" >{item.title}</h4>
                        <ul className="space-y-1" >
                            {item.list.map((listItem) => (
                                <li key={listItem.path} >
                                    <Link href={listItem.path} className={`flex space-x-2 items-center text-[#556476] py-3 pl-7 pr-14 ${pathname === listItem.path && "bg-[#F4F7FF] !text-[#4A58EC]"} hover:text-[#4A58EC] hover:bg-[#F4F7FF]`}>
                                        {listItem.icon}
                                        <p>{listItem.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
            ))}
        </ul>
        <SignOutButton/>
        </nav>
    ) 
}

export default Navbar;