'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


export async function SignUp(formData) {
    const supabase = createClient()

    const { email, password, first_name, last_name } = Object.fromEntries(formData)


    const data = {
        email,
        password,
        options: {
            data: {
                first_name,
                last_name,
                email
            }
        }
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.log(error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}

