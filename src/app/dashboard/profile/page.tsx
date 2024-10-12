import UserBio from '@/components/ui/userBio'
import ProfileForm from '@/components/forms/profileForm'

import { getUser } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'

export default async function ProfilePage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if(user){
    const userData = await getUser(user.id)

    return (
        <div className='space-y-6' >
          <UserBio user={userData}/>
          <ProfileForm user={userData}/>  
        </div>
    )
  }


}

