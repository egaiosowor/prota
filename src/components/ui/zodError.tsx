// type ZodErrorProps = {
//     state: { errors: {} }
//     name: string
// }

export default function ZodError({state, name}){
    return(
        <>
            {state?.errors?.[name] && (<p className="w-full text-sm text-red-500">{state.errors[name]}</p>)} 
        </>
    )
}