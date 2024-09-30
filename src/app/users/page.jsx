'use client'

import { useEffect, useState } from "react";

import UserTable from "@/components/users/userTable";

export default function UsersList(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("/api/users")

            if(!res.ok){
                throw new Error("Network response was not ok")
            }

            const data = await res.json()
            setUsers(data)
        } 
        getUsers()
    }, [])


    return(
        <div>
            <UserTable users={users} />
        </div>
    )
}