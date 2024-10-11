import { MdEdit } from "react-icons/md";
import { Button, buttonVariants } from "./button";

type EditButtonProps = {
    onToggle: () => void
}

export default function EditButton({onToggle}: EditButtonProps){
    return(
        <Button
            onClick={(e)=>{
                e.preventDefault
                onToggle()
            }}
            className={buttonVariants({variant:"outline"})}
        >
            <MdEdit className="mr-2" />
            Edit
        </Button>
    )
}