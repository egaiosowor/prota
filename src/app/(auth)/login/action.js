'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'



export async function login(formData) {
    const supabase = createClient()

    const { email, password } = Object.fromEntries(formData)

    const data = {
        email,
        password,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log("error", error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}