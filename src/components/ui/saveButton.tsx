import { useEffect } from 'react'
import { useFormStatus } from 'react-dom'

import Loader from './loader'
import { Button, buttonVariants } from './button'

type SaveButtonProps = {
    onToggle: () => void
}

export default function SaveButton({onToggle}: SaveButtonProps) {

    const { pending } = useFormStatus()

    useEffect(()=>{
        if(!pending){
            onToggle()
        }
    }, [pending, onToggle])

    return (
        <Button
            type="submit"
            disabled={pending}
            className={buttonVariants({variant:"outline"})}
        >
            { pending && <Loader fill={"fill-black"} /> }
            { pending ? "Submitting" : "Save" }
        </Button>
    )
}