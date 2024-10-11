import Link from "next/link"

type MenuItemProps = {
    item: {
        title: string
        icon: React.ReactNode
        path: string
    }
    pathname: string;
}

export default function MenuItem({item, pathname}: MenuItemProps){
    return(
        <Link href={item.path} className={`flex items-center text-[#556476] py-3 pl-7 pr-14 ${pathname === item.path && "bg-[#F4F7FF] !text-[#4A58EC]"} hover:text-[#4A58EC] hover:bg-[#F4F7FF]`}>
            {item.icon}
            <span className="ml-2" >{item.title}</span>
        </Link>
       
    )
}