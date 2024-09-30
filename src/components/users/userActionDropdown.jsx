"use client"

import Link from "next/link"
import { useState } from "react";

import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";

export default function UserActionDropdown({id}) {
    const [dropDownOpen, setDropDownOpen] = useState(false)

    const showDropdown = () => setDropDownOpen(true);
    
    const hideDropdown = (event) => {
        // Ensure we don't hide the dropdown when hovering on the dropdown menu
        if (!event.relatedTarget || !event.relatedTarget.closest('#dropdownMenu')) {
            setDropDownOpen(false);
        }
    };

    return (
        <>
            <GoKebabHorizontal 
                className="w-full inline-block cursor-pointer" 
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
            />
            {
                dropDownOpen && (        
                    <div 
                        id="dropdownMenu" 
                        className="py-3 px-2 space-y-2 bg-white rounded-lg shadow-md absolute top-8 left-8 z-20" 
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
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