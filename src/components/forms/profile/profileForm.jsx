import Title from '@/types/title'
import Roles from '@/types/roles'
import Gender from '@/types/gender'

import { getUser } from '@/utils/data'
import { updateUser } from '@/utils/actions'

import InputField from '../../fields/inputField'
import PhoneField from '@/components/fields/phoneField'
import OptionsField from '../../fields/optionsField'

import BioForm from './bioForm'
import PersonalInfoForm from './personalInfoForm'

export default async function ProfileForm({ id }) {

  const user = await getUser(id)

  return (
    <div className='space-y-6' >
      <BioForm user={user}/>
      <PersonalInfoForm user={user}/>
      <div  className="grid grid-cols-2 gap-6" >
        <div className="bg-white rounded-xl p-4 space-y-3" >
          <h4 className="text-sm text-blue-950 font-semibold" >Access Control</h4>
          <div className="grid grid-cols-2 gap-4">
            <OptionsField
              label={"Role"}
              placeholder={"Select"}
              name={"role"}
              isRequired={true}
              options={Roles}
              defaultValue={user?.role || ""}
            />

            <OptionsField
              label={"Title"}
              placeholder={"Select"}
              name={"title"}
              isRequired={true}
              options={Title}
              defaultValue={user?.title || "+"}
            />

          </div>
        </div>
      </div>
      <button type='submit' className="text-white py-3 px-7 rounded-md bg-blue-700 hover:bg-blue-400">
        Update
      </button>
    </div>
  )
}