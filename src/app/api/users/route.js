import { createClient } from "@/utils/supabase/server";


export async function GET() {
    const supabase = createClient()

    try {
        const { data } = await supabase
            .from('profiles')
            .select(`id, first_name, last_name, email, title, gender, avatar_url`)

        return Response.json(data)
    } catch (err) {
        console.log(err)
    }

}

