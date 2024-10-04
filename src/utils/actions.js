'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createClient } from '@/utils/supabase/server'

import { personalInfoFormSchema } from './definitions'

export async function signOut() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        console.log(error)
        redirect('/error')
    }

    redirect('/login')

}

export async function updatePersonalInfo(state, formData) {

    const { id, first_name, last_name, title, gender, phone } = Object.fromEntries(formData)
    
    const validatedFields = personalInfoFormSchema.safeParse({ first_name, last_name, title, gender, phone })    
    
    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const formatPhone = (phone) => {
        return phone.split(" ").join("")
    }
     
    try {
        const supabase = createClient()

        const { error } = await supabase.from('profiles')
        .upsert({
            id,
            first_name,
            last_name,
            title,
            gender,
            phone: formatPhone(phone),
            updated_at: new Date().toISOString(),
        })
        .eq('id', id)

        revalidatePath("/users")
        revalidatePath(`/users/${id}`)
        revalidatePath("/dashboard/profile")

        if (error) throw error
        console.log('Profile updated!')
    } catch (error) {
        console.log(error.message)
    }

}
