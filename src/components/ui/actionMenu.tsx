"use client"

import Link from "next/link"

import useDisclosure from "@/hooks/useDisclosure";

import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";

export default function ActionMenu({id}: {  id: string}) {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <GoKebabHorizontal 
                className="w-full inline-block cursor-pointer" 
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            />
            {
                isOpen && (        
                    <div 
                        id="dropdownMenu" 
                        className="py-3 px-2 space-y-2 bg-white rounded-lg shadow-md absolute top-8 left-8 z-20" 
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                        >
                        <ul className="space-y-1" >
                            <li>
                                <Link href={`/users/${id}`} className={`flex space-x-2 items-center rounded-xl text-sm text-[#556476] px-2`}>
                                    <FaUserEdit />
                                    <p>Edit</p>
                                </Link>
                            </li>
                            <li>
                                <button className={`flex space-x-2 items-center rounded-xl text-sm text-[#556476] px-2`}>
                                    <AiFillDelete />
                                    <p>Delete</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}