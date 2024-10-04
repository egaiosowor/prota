export  default function PersonalInfoFormSkeleton(){
    return(

        <div className="bg-white rounded-xl p-6 space-y-3" >
            <h4 className="text-base text-blue-950 font-semibold" >Personal Information</h4>
            <div className="w-[350px] grid grid-cols-2 gap-y-4 gap-x-9 animate-pulse"  >
                <DisplayFieldSkeleton/>
                <DisplayFieldSkeleton/>
                <DisplayFieldSkeleton/>
                <DisplayFieldSkeleton/>
                <DisplayFieldSkeleton/>
            </div>

        </div>

    )
}

function DisplayFieldSkeleton(){
    return(
        <div className="flex flex-col space-y-2" >
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px]"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <span className="sr-only">Loading...</span>    
        </div>
    )
}