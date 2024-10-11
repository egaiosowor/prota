import UserBio from '@/components/ui/userBio'
import ProfileForm from '@/components/forms/profileForm'

import { getUser } from '@/lib/actions'

export default async function UserPage({ params }: { 
    params: 
        { id: string } 
    } ) {

    const { id } = params
    const userData = await getUser(id)

    return (
        <div className='space-y-6' >
            <UserBio user={userData} />
            <ProfileForm user={userData} />
        </div>
    )
}

