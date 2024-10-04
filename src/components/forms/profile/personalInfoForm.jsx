"use client"

import Title from '@/types/title'
import Gender from '@/types/gender'

import InputField from '../../fields/inputField'
import PhoneField from '@/components/fields/phoneField'
import OptionsField from '../../fields/optionsField'
import DisplayField from '@/components/fields/displayField'

import SaveButton from '@/components/ui/saveButton'
import EditButton from '@/components/ui/editButton';

import PersonalInfoFormSkeleton from '@/components/skeletons/personalInfoFormSkeleton'

import toStartCase from '@/utils/toStartCase'
import useDisclosure from '@/hooks/useDisclosure';

import { updatePersonalInfo } from '@/utils/actions';


export default function PersonalInfoForm({user}) {

    const { isOpen, onToggle } = useDisclosure()

    if(!user){
        return <PersonalInfoFormSkeleton/>
    }


    return (
        <form action={updatePersonalInfo} className='bg-white rounded-xl p-6 space-y-3'>
            <div className='flex justify-between items-start' >
                <h4 className="text-base text-blue-950 font-semibold" >Personal Information</h4>
                {
                    !isOpen ? <EditButton onToggle={onToggle}/> : <SaveButton onToggle={onToggle} />
                }

            </div>
            {
                !isOpen && (
                    <div className="w-[450px] grid grid-cols-2 gap-4">
                        <DisplayField label={"First Name"} value={user.first_name} />
                        <DisplayField label={"Last Name"} value={user.last_name} />
                        <DisplayField label={"Phone"} value={user.phone} />
                        <DisplayField label={"Gender"} value={toStartCase(user.gender)} />
                        <DisplayField label={"Title"} value={toStartCase(user.title)} />
                    </div>
                )
            }

            {
                isOpen && (
                    <div className="w-[450px] grid grid-cols-2 gap-4">
                        <input type="hidden" name="id" value={user.id} />
                        <InputField type={"text"} label={'First Name'} defaultValue={user.first_name || ""} name={"first_name"} isRequired={true}/>
                        <InputField type={"text"} label={'Last Name'} defaultValue={user.last_name || ""} name={"last_name"} isRequired={true}/>
                        <PhoneField value={user.phone || ""}/>
                        <OptionsField label={"Gender"} placeholder={"Select"} name={"title"} isRequired={true} options={Gender} defaultValue={user.gender || "+"}/>
                        <OptionsField label={"Title"} placeholder={"Select"} name={"title"} isRequired={true} options={Title} defaultValue={user.title || "+"}/>
                    </div>
                )
            }
            

        </form>
)}



