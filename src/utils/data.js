"use server"

import { revalidateTag } from "next/cache"
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



