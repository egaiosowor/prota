"use client";

import Link from "next/link";

import { login } from "@/actions/actions";

import { useActionState } from "react";

import { getSignupRoute } from "@/routes";
import { buttonVariants } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <div className="w-80 space-y-8">
      <h1 className="text-blue-950 text-4xl text-center font-bold">
        Welcome Back
      </h1>
      <div className="space-y-4">
        <form action={formAction} className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
            />
          </div>
          <div className="col-span-2">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className={buttonVariants({ size: "lg", className: "col-span-2" })}
          >
            {isPending && <Loader fill={"fill-black"} />}
            {isPending ? "Submitting" : "Login"}
          </Button>
        </form>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link href={getSignupRoute()} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
