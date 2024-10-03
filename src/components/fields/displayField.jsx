export default function DisplayField({label, value}){
    return(
        <div className='space-y-1' >
            <label className="text-sm text-gray-600 font-semibold">{label}</label>
            <p>{value}</p>
        </div>
    )
}