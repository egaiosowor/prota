import { createClient } from '@/lib/supabase/server'
import type { User } from './definitions'

export const getUser = async (id: string | undefined): Promise<User | null> => {
    const supabase = createClient()

    try{
        const { data, error } = await supabase
            .from('profiles')
            .select(`id, first_name, last_name, email, phone, title, gender, avatar_url`)
            .eq('id', id)
            .single() 

        return data as User
    }catch(err){
        console.log(err)
        return null
    }
}


export const getUsers = async (): Promise<User[] | null> => {
    const supabase = createClient()

    try{
        const { data } = await supabase
            .from('profiles')
            .select(`id, first_name, last_name, email, phone, title, gender, avatar_url`)
        return data as User[]
    }catch(err){ 
        console.log(err)
        return null
    }
}
