"use client"

import { useParams } from "next/navigation"

export default function UserPage(){

    const {id} = useParams()

    return(
        <div>
            {id}
        </div>
    )
}