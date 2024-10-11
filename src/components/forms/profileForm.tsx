"use client"

import InputWithLabel from '../ui/inputWithLabel';
import SelectWithLabel from '../ui/selectWithLabel';
import DisplayField from '@/components/ui/displayField'
import SaveButton from '@/components/ui/saveButton'
import EditButton from '@/components/ui/editButton';
import { ProfileFormSkeleton } from '@/components/ui/skeletons'

import { Title, Gender } from '@/lib/definitions'
import type { User } from '@/lib/definitions';
import { toStartCase } from '@/lib/utils'
import { updateProfile } from '@/lib/actions'

import {useFormState} from 'react-dom'
import useDisclosure from '@/hooks/useDisclosure';


export default function ProfileForm({user}: { user: User }) {
    const [state, formAction] = useFormState(updateProfile, undefined)

    const { isOpen, onToggle } = useDisclosure()

    if(!user){
        return <ProfileFormSkeleton/>
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
                        <DisplayField 
                            label={"First Name"} 
                            value={user.first_name}/>
                        <DisplayField 
                            label={"Last Name"} 
                            value={user.last_name}/>
                        <DisplayField 
                            label={"Phone"} 
                            value={user.phone} />
                        <DisplayField 
                            label={"Gender"} 
                            value={toStartCase(user.gender)} />
                        <DisplayField 
                            label={"Title"} 
                            value={toStartCase(user.title)} />
                    </div>
                )
            }

            {
                isOpen && (
                    <div className="w-[450px] grid grid-cols-2 gap-4">
                        <input type="hidden" name="id" value={user.id} />
                        <InputWithLabel 
                            state={state} 
                            type={"text"} 
                            label={'First Name'} 
                            defaultValue={user.first_name || ""} 
                            name={"first_name"} 
                        />
                        <InputWithLabel 
                            state={state} 
                            type={"text"} 
                            label={'Last Name'} 
                            defaultValue={user.last_name || ""} 
                            name={"last_name"} 
                        />
                        <InputWithLabel 
                            state={state} 
                            type={"tel"} 
                            label={'Phone'} 
                            defaultValue={user.phone || ""} 
                            name={"phone"} 
                        />
                        <SelectWithLabel 
                            state={state} 
                            label={"Gender"} 
                            placeholder={"Select"} 
                            name={"gender"} 
                            options={Gender} 
                            defaultValue={user.gender || ""}
                        />
                        <SelectWithLabel 
                            state={state} 
                            label={"Title"} 
                            placeholder={"Select"} 
                            name={"title"} 
                            options={Title} 
                            defaultValue={user.title || ""}
                        />
                    </div>
                )
            }
            

        </form>
)}



