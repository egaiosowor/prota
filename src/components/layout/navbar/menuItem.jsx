import Link from "next/link"

export default function MenuItem({item, pathname}){
    return(
        <li  className="space-y-3" >
            <h4 className="ml-7 text-xs text-[#556476] font-semibold" >{item.title}</h4>
            <ul className="space-y-1" >
                {item.list.map((obj) => (
                    <li key={obj.path} >
                        <Link href={obj.path} className={`flex space-x-2 items-center text-[#556476] py-3 pl-7 pr-14 ${pathname === obj.path && "bg-[#F4F7FF] !text-[#4A58EC]"} hover:text-[#4A58EC] hover:bg-[#F4F7FF]`}>
                            {obj.icon}
                            <p>{obj.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}