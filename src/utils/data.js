"use server"

import { createClient } from "./supabase/client"

export const fetchProfile = async (user) => {
    const supabase = createClient()

    try {

        const { data, error, status } = await supabase
            .from('profiles')
            .select(`first_name, last_name, title, phone, gender, role, avatar_url`)
            .eq('id', user?.id)
            .single()

        console.log(data)

        return data
    } catch (error) {
        alert('Error loading user data!')
    } 
}