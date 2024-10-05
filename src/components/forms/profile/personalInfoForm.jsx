"use client"

import { Title, Gender } from '@/libs/definitions'

import InputField from '../../fields/inputField'
import PhoneField from '@/components/fields/phoneField'
import OptionsField from '../../fields/optionsField'
import DisplayField from '@/components/fields/displayField'

import SaveButton from '@/components/ui/saveButton'
import EditButton from '@/components/ui/editButton';

import { PersonalInfoFormSkeleton } from '@/components/ui/skeletons'

import { toStartCase } from '@/libs/utils'
import {useFormState} from 'react-dom'
import useDisclosure from '@/hooks/useDisclosure';
import { updatePersonalInfo } from '@/libs/actions'


export default function PersonalInfoForm({user}) {
    const [state, formAction] = useFormState(updatePersonalInfo, undefined)

    const { isOpen, onToggle } = useDisclosure()

    if(!user){
        return <PersonalInfoFormSkeleton/>
    }


    return (
        <form action={formAction} className='bg-white rounded-xl p-6 space-y-3'>
            <div className='flex justify-between items-start' >
                <h4 className="text-base text-blue-950 font-semibold" >Personal Information</h4>
                {
                    !isOpen ? <EditButton onToggle={onToggle}/> : <SaveButton onToggle={onToggle}/>
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
                        <InputField state={state} type={"text"} label={'First Name'} defaultValue={user.first_name || ""} name={"first_name"} isRequired={true}/>
                        <InputField state={state} type={"text"} label={'Last Name'} defaultValue={user.last_name || ""} name={"last_name"} isRequired={true}/>
                        <PhoneField state={state} value={user.phone || ""}/>
                        <OptionsField state={state} label={"Gender"} placeholder={"Select"} name={"gender"} isRequired={true} options={Gender} defaultValue={user.gender || ""}/>
                        <OptionsField state={state} label={"Title"} placeholder={"Select"} name={"title"} isRequired={true} options={Title} defaultValue={user.title || ""}/>
                    </div>
                )
            }
            

        </form>
)}



