"use client"
import { signOut } from "@/libs/actions";
import { LuLogOut } from "react-icons/lu";

export default function SignOutButton(){
    return(
        <button onClick={()=>signOut()} className={`flex space-x-2 items-center text-[#556476] py-3 pl-7 pr-14 hover:text-[#4A58EC] hover:bg-[#F4F7FF]`}>
            <LuLogOut />
            <p>Logout</p>
        </button>
    )
}

