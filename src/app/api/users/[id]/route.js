import { createClient } from "@/utils/supabase/server";


export async function GET(request, {params}) {
    const supabase = createClient()
    const { id } = params

    try {
        const { data, error } = await supabase
            .from('profiles')
            .select(`id, first_name, last_name, email, phone, role, title, gender, avatar_url`)
            .eq('id', id)
            .single()

        if(error){
            throw error
        }

        return Response.json(data)
    } catch (err) {
        throw err
    }

}



