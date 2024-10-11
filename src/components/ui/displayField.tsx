import { Label } from "./label"

type DisplayFieldProps = {
    label: string
    value: string
}

export default function DisplayField({label, value}: DisplayFieldProps){
    return(
        <div className='space-y-1' >
            <Label>{label}</Label>
            <p>{value}</p>
        </div>
    )
}