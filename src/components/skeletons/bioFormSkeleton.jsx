export default function BioFormSkeleton(){
    return(
        <div className="animate-pulse flex items-center bg-white rounded-xl p-6 space-x-2" >
            <div className="w-16 h-16 bg-gray-200  rounded-full" ></div>
            <div className="space-y-2">
                <div className="h-3 w-40 bg-gray-200 rounded-full" ></div>
                <div className="h-3 w-16 bg-gray-200 rounded-full" ></div>
            </div>
        </div>
    )
}