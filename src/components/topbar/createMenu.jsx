"use client"

import Link from "next/link";

import useDisclosure from "@/hooks/useDisclosure";

import { GoPlus } from "react-icons/go";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";


const MenuItems = [
    {
        title: "Account",
        icon: <HiOutlineOfficeBuilding />,
        path: "/dashboard/accounts",
    },
    {
        title: "Contact",
        icon: <IoPersonAddOutline />,
        path: "/dashboard/contacts",
    },
    {
        title: "Lead",
        icon: <RiGroupLine />,
        path: "/dashboard/leads",
    }
]

const CreateMenu = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    return(
        <div className="relative" >
            < GoPlus 
                className="cursor-pointer"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            />

            {
                isOpen && (

                    <div 
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose} 
                        id="dropdownMenu" 
                        className="py-3 px-2 space-y-2 bg-white rounded-lg shadow-md absolute z-50" 
                    >
                        <h4 className="ml-5 text-xs text-[#556476] font-semibold" >CREATE</h4>
                        <ul className="space-y-1" >
                            {MenuItems.map((item) => (
                                <li key={item.title}>
                                    <Link href={item.path} className={`flex space-x-2 items-center rounded-xl text-sm text-[#556476] py-2 pl-5 pr-10 hover:text-[#4A58EC] hover:bg-[#F4F7FF]`}>
                                        <span>{item.icon}</span>
                                        <p>{item.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
      

    )
}

export default CreateMenu;