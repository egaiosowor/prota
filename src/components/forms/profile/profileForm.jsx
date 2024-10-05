import { getUser } from '@/libs/actions'

import BioForm from './bioForm'
import PersonalInfoForm from './personalInfoForm'

export default async function ProfileForm({ id }) {

  const user = await getUser(id)

  return (
    <div className='space-y-6' >
      <BioForm user={user}/>
      <PersonalInfoForm user={user}/>
      
    </div>
  )
}