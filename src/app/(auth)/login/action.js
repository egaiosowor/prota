'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { loginFormSchema } from '@/utils/definitions'
import { createClient } from '@/utils/supabase/server'



export async function login(state, formData) {
    const supabase = createClient()

    const validatedFields = loginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const {email, password} = validatedFields.data

    const { error } = await supabase.auth.signInWithPassword({email, password})

    if (error) {
        return{
            message: error.message
        }
        // redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}