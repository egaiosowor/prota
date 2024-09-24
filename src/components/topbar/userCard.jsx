import Link from "next/link";

import { CgProfile } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";


const MenuItems = [
    {
        title: "Profile",
        icon: <CgProfile />,
        path: "/dashboard/profile",
    },
    {
        title: "Settings",
        icon: <VscSettings />,
        path: "/dashboard/settings",
    },
]

const UserMenu = () => {
    return(
        <Link href={'/dashboard/profile'} className="px-4 flex items-center space-x-2 text-gray-900 cursor-pointer">
            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Jese image"/>
            <p className="text-base font-semibold">Neil Sims</p>
        </Link>
    )
}

export default UserMenu;