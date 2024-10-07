"use client"

import Link from "next/link"

import { login } from "@/lib/actions"
import AuthButton from "../authButton"

import { useFormState } from 'react-dom'

import ZodError from "@/components/ui/zodError"


export default function LoginForm() {

    const [state, formAction] = useFormState(login, undefined)

    return (
        <div className="w-80 space-y-8" >
            <h1 className="text-blue-950 text-4xl text-center font-bold" >
                Welcome Back
            </h1>
            <div className="space-y-4" >
                <form action={formAction} className="grid grid-cols-2 gap-3">
                    <div className="col-span-2" >
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                        <ZodError state={state} name="email" />
                    </div>
                    <div className="col-span-2" >
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                        <ZodError state={state} name="password" />
                    </div>

                    <AuthButton name="Login" />
                </form>
                <p className="text-center" >Don't have an account? <Link href={"/signup"} className="text-blue-700" >Sign Up</Link></p>
            </div>
        </div>

    )
}


