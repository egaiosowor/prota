'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signOut() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        console.log(error)
        redirect('/error')
    }

    redirect('/login')

}


export async function updateProfile(id, formData) {

    const {first_name, last_name, title, phone, gender, role} = Object.fromEntries(formData)
    
    const formatPhone = (phone) => {
        return phone.split(" ").join("")
    }

     
    try {
        const supabase = createClient()

        const { error } = await supabase.from('profiles').upsert({
            id,
            first_name,
            last_name,
            title,
            phone: formatPhone(phone),
            gender,
            role,
            avatar_url: "",
            updated_at: new Date().toISOString(),
        })

        if (error) throw error
        console.log('Profile updated!')
    } catch (error) {
        console.log('Error updating the data!')
    }

    revalidatePath("/dashboard/profile");
    redirect("/dashboard/profile");
}
