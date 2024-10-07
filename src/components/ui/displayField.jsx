import { Label } from "./label"

export default function DisplayField({label, value}){
    return(
        <div className='space-y-1' >
            <Label>{label}</Label>
            <p>{value}</p>
        </div>
    )
}