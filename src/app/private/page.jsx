import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import SignOutButton from '@/components/signOutButton'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  
  // if (error || !data?.user) {
  //   redirect('/login')
  // }

  return (
    <div>
      <p>Hello {data?.user?.email}</p>
      <SignOutButton/>
    </div>
  )
}