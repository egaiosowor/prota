import Link from "next/link";

import { fetchProfile } from "@/utils/data";
import { createClient } from '@/utils/supabase/server'

const UserMenu = async () => {
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()
    const profile = await fetchProfile(user)

    return (
        <Link href={'/dashboard/profile'} className="px-4 flex items-center space-x-2 text-gray-900 cursor-pointer">
            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Jese image" />
            <p className="text-base font-semibold">{`${profile?.first_name} ${profile?.last_name}`}</p>
        </Link>
    )
}

export default UserMenu;