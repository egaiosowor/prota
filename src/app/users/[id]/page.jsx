import ProfileForm from '@/components/forms/profile/profileForm'

export default async function UserPage({params}) {

    const { id } = params

    return (
       <ProfileForm id={id} />
    )
}

