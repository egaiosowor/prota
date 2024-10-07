import ProfileForm from '@/components/forms/profile/profileForm'
import { createClient } from '@/lib/supabase/server'

export default async function ProfilePage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <ProfileForm id={user?.id} />
}