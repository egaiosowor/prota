"use client"

import { useFormStatus } from 'react-dom'

import { Button, buttonVariants } from "@/components/ui/button"
import Loader from "@/components/ui/loader"


export default function AuthButton({name}: { name: string }) {

    const { pending } = useFormStatus()

    return (
        <Button 
            type="submit"
            disabled={pending}
            className={buttonVariants({size:"lg", className:"col-span-2"})} 
        >
            { pending && <Loader fill={'fill-black'}/> }
            { pending ? "Submitting" : name }
        </Button>
    )
}