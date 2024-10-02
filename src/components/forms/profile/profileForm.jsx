import Title from '@/types/title'
import Roles from '@/types/roles'
import Gender from '@/types/gender'

import { updateUser } from '@/utils/actions'
import { fetchProfile } from '@/utils/data'

import InputField from '../../fields/inputField'
import PhoneField from '@/components/fields/phoneField'

import OptionsField from '../../fields/optionsField'

export default async function ProfileForm({ id }) {


  const profile = await fetchProfile(id)



  return (
    <form action={updateUser} className='space-y-8' >
      <InputField
        type={"hidden"}
        name={"id"}
        value={id}
      />
      <div  className="grid grid-cols-2 gap-6" >
        <div className='col-span-2 bg-white rounded-xl p-4 space-y-3'>
          <h4 className="text-sm text-blue-950 font-semibold" >Personal Information</h4>
          <div className="grid grid-cols-3 gap-4">
            <InputField
              type={"text"}
              label={'First Name*'}
              defaultValue={profile?.first_name || ""}
              name={"first_name"}
              isRequired={true}
            />
            <InputField
              type={"text"}
              label={'Last Name*'}
              defaultValue={profile?.last_name || ""}
              name={"last_name"}
              isRequired={true}
            />

            <InputField
              type={"email"}
              label={'Email*'}
              defaultValue={profile?.email || ""}
              name={"email"}
              isRequired={true}
              disabled={true}
            />

            <PhoneField
              value={profile?.phone || ""}
            />

            <OptionsField
              label={"Gender"}
              placeholder={"Select"}
              name={"gender"}
              isRequired={true}
              options={Gender}
              defaultValue={profile?.gender || ""}
            />


          </div>
        </div>
        <div className="bg-white rounded-xl p-4 space-y-3" >
          <h4 className="text-sm text-blue-950 font-semibold" >Access Control</h4>
          <div className="grid grid-cols-2 gap-4">
            <OptionsField
              label={"Role"}
              placeholder={"Select"}
              name={"roles"}
              isRequired={true}
              options={Roles}
              defaultValue={profile?.role || ""}
            />

            <OptionsField
              label={"Title"}
              placeholder={"Select"}
              name={"title"}
              isRequired={true}
              options={Title}
              defaultValue={profile?.title || "+"}
            />

          </div>
        </div>
      </div>
      <button type='submit' className="text-white py-3 px-7 rounded-md bg-blue-700 hover:bg-blue-400">
        Update
      </button>
    </form>
  )
}