'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createClient } from '@/libs/supabase/server'

import { loginFormSchema } from '@/libs/definitions'
import { personalInfoFormSchema } from './definitions'




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


export async function signOut() {
    const supabase = createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        console.log(error)
        redirect('/error')
    }

    redirect('/login')

}

export const getUsers = async () => {
    const supabase = createClient()

    try{
        const { data } = await supabase
            .from('profiles')
            .select(`id, first_name, last_name, email, title, gender, avatar_url`)
        return data
    }catch(err){
        console.log(err)
    }
}

export const getUser = async (id) => {
    const supabase = createClient()

    try{
        const { data, error } = await supabase
            .from('profiles')
            .select(`id, first_name, last_name, email, phone, role, title, gender, avatar_url`)
            .eq('id', id)
            .single() 

        return data
    }catch(err){
        console.log(err)
    }
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
