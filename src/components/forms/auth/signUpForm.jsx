"use client"

import Link from "next/link"
import { signUp } from "@/lib/actions"
import { useFormStatus, useFormState } from 'react-dom'



export default function SignUpForm() {

    const [state, formAction] = useFormState(signUp, undefined)


    return (
        <div className="w-ful max-w-96 space-y-8" >
            <h1 className="text-blue-950 text-4xl text-center font-bold" >
                Sign Up
            </h1>
            <div className="space-y-4" >
                <form action={formAction} className="grid grid-cols-2 gap-3">
                    <div className="col-span-1 " >
                        <input
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                        {state?.errors?.first_name && (<p className="w-full text-sm text-red-500">{state.errors.first_name}</p>)}
                    </div>
                    <div className="col-span-1" >
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                        {state?.errors?.last_name && (<p className="w-full text-sm text-red-500">{state.errors.last_name}</p>)}
                    </div>
                    <div className="col-span-2 " >
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                        {state?.errors?.email && (<p className="w-full text-sm text-red-500">{state.errors.email}</p>)}
                    </div>
                    <div className="col-span-2 " >
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                        {state?.errors?.password && (
                            <div className="text-sm text-red-500">
                                <p>Password must:</p>
                                <ul>
                                    {state.errors.password.map((error) => (
                                        <li key={error}>- {error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <SignUpButton />
                </form>
                <p className="text-center" >Already have an account? <Link href={"/login"} className="text-blue-700" >Login</Link></p>
            </div>
        </div>

    )
}


function SignUpButton() {

    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className={`flex items-center justify-center col-span-2 py-3 text-white ${pending ? "bg-blue-500" : "bg-blue-700 hover:bg-blue-500"} rounded-xl`}>
            {
                pending && (

                    <div role="status" className="mr-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                )
            }
            {pending ? "Submitting" : "Submit"}
        </button>
    )
}
