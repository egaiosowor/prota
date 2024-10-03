import Title from '@/types/title'
import Roles from '@/types/roles'
import Gender from '@/types/gender'

import InputField from "@/components/fields/inputField"
import PhoneField from '@/components/fields/phoneField'
import OptionsField from "@/components/fields/optionsField"

import { getUser } from "@/utils/data"
import { updateUser } from "@/utils/actions"

export default async function UserPage({params}) {

    const { id } = params
    const user = await getUser(id)

    return (
        <form action={updateUser} className='space-y-8' >
            <InputField
                type={"hidden"}
                name={"id"}
                defaultValue={user?.id}
            />
            <div className="grid grid-cols-2 gap-6" >
                <div className='col-span-2 bg-white rounded-xl p-4 space-y-3'>
                    <h4 className="text-sm text-blue-950 font-semibold" >Personal Information</h4>
                    <div className="grid grid-cols-3 gap-4">
                        <InputField
                            type={"text"}
                            label={'First Name*'}
                            defaultValue={user?.first_name || ""}
                            name={"first_name"}
                            isRequired={true}
                        />
                        <InputField
                            type={"text"}
                            label={'Last Name*'}
                            defaultValue={user?.last_name || ""}
                            name={"last_name"}
                            isRequired={true}
                        />

                        <InputField
                            type={"email"}
                            label={'Email*'}
                            defaultValue={user?.email || ""}
                            name={"email"}
                            isRequired={true}
                            disabled={true}
                        />

                        <PhoneField
                            value={user?.phone || ""}
                        />

                        <OptionsField
                            label={"Gender"}
                            placeholder={"Select"}
                            name={"gender"}
                            isRequired={true}
                            options={Gender}
                            defaultValue={user?.gender || ""}
                        />


                    </div>
                </div>
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
                            defaultValue={user?.title || ""}
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

