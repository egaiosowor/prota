"use server"

import { createClient } from "./supabase/client"



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


export const fetchProfile = async (id) => {
    const supabase = createClient()

    try {

        const { data, error, status } = await supabase
            .from('profiles')
            .select(`first_name, last_name, email, title, phone, gender, role, avatar_url`)
            .eq('id', id)
            .single()

        return data
    } catch (error) {
        alert('Error loading user data!')
    } 
}

