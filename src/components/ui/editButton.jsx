import { MdEdit } from "react-icons/md";


export default function EditButton({onToggle}){
    return(
        <div onClick={onToggle} className='px-2 py-1 flex items-center space-x-1 text-gray-600 border border-gray-400 rounded-md cursor-pointer' >
            <MdEdit />
            <p className='text-sm' >Edit</p>
        </div>
    )
}