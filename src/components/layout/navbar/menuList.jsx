import MenuItem from "./menuItem"

export default function MenuList({menu_list, pathname}){
    return(
        <ul className="space-y-1" >
            {menu_list.map((item) => (
                <li key={item.path} >
                    <MenuItem item={item} pathname={pathname} />
                </li>
            ))}
        </ul>
    )
}