import Link from "next/link";

import { getUser } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { UserCardSkeleton } from "./skeletons";

const UserMenu = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = await getUser(user?.id);

  if (!profile) {
    return <UserCardSkeleton />;
  }

  return (
    <Link
      href={"/dashboard/profile"}
      className="px-4 flex items-center space-x-2 text-gray-900 cursor-pointer"
    >
      <img
        className="w-10 h-10 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
        alt={profile.first_name}
      />
      <p className="text-base font-semibold">{`${profile.first_name} ${profile.last_name}`}</p>
    </Link>
  );
};

export default UserMenu;
