"use client";

import Link from "next/link";

import { signUp } from "@/actions/actions";

import AuthButton from "../authButton";

import { useFormState } from "react-dom";
import { getLoginRoute } from "@/routes";

export default function SignUpForm() {
  const [state, formAction] = useFormState(signUp, undefined);

  return (
    <div className="w-ful max-w-96 space-y-8">
      <h1 className="text-blue-950 text-4xl text-center font-bold">Sign Up</h1>
      <div className="space-y-4">
        <form action={formAction} className="grid grid-cols-2 gap-3">
          <div className="col-span-1 ">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
            />
            {state?.errors?.first_name && (
              <p className="w-full text-sm text-red-500">
                {state.errors.first_name}
              </p>
            )}
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
            />
            {state?.errors?.last_name && (
              <p className="w-full text-sm text-red-500">
                {state.errors.last_name}
              </p>
            )}
          </div>
          <div className="col-span-2 ">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
            />
            {state?.errors?.email && (
              <p className="w-full text-sm text-red-500">
                {state.errors.email}
              </p>
            )}
          </div>
          <div className="col-span-2 ">
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

          <AuthButton name="Create Account" />
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link href={getLoginRoute()} className="text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
