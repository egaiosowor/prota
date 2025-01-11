import type { Metadata } from "next";
import UserBio from "@/components/ui/userBio";
import ProfileForm from "@/components/forms/profileForm";

import { getUser } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Profile | Prota",
};

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const userData = await getUser(user.id);

    return (
      <div className="space-y-6">
        <UserBio user={userData} />
        <ProfileForm user={userData} />
      </div>
    );
  }
}
