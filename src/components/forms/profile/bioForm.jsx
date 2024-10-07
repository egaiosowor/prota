import { toStartCase } from "@/lib/utils"
import { BioFormSkeleton } from "@/components/ui/skeletons"

export default function BioForm({user}){

    if(!user){
        return <BioFormSkeleton/>
    }

    return(
        <form className="flex items-center bg-white rounded-xl p-6 space-x-2" >
            <img
                loading="lazy"
                className="w-16 h-16 rounded-full" 
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" 
                alt={user.first_name} />
            <div>
                <h2 className="font-semibold text-xl text-blue-950" >{`${user.first_name} ${user.last_name}`}</h2>
                <p className="text-gray-600" >{toStartCase(user.title)}</p>
            </div>
        </form>
    )
}