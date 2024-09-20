"use client"
import { signOut } from "@/utils/actions"

export default function SignOutButton(){
    return(
        <button onClick={()=>signOut()} >
            Logout
        </button>
    )
}