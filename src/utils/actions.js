'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


export async function SignUp(formData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        options: {
            data: {
              firstName: formData.get('firstName'),
              lastName: formData.get('lastName'),
            }
          }
    }

    const { error } = await supabase.auth.SignUp(data)

    if (error) {
        console.log(error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}


export async function login(formData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log("error", error)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/private')
}

export async function signOut() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        console.log(error)
        redirect('/error')
    }

    redirect('/login')

  }
  
