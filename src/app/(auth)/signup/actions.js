'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { signupFormSchema } from '@/utils/definitions'



export async function signUp(state, formData) {
    const supabase = createClient()
    
    const validatedFields = signupFormSchema.safeParse({
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { first_name, last_name, email, password } = validatedFields.data;

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name,
                last_name,
                email
            }
        }
    })

    if (error) {
        return { message: error.message }
        // redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}

