import Link from "next/link"

export default function SignUpForm ({action}){
    return(
        <div className="w-full space-y-8" >
            <h1 className="text-blue-950 text-4xl text-center font-bold" >
                Sign Up
            </h1>
            <div className="space-y-4" >
                <form className="grid grid-cols-2 gap-3">
                    <input 
                        type="text"
                        placeholder="First Name"
                        name="first_name" 
                        required
                        className="col-span-1 p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                    <input 
                        type="text"
                        placeholder="Last Name"
                        name="last_name" 
                        required
                        className="col-span-1 p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email" 
                        required
                        className="col-span-2 p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                    <input 
                        type="password"
                        placeholder="Enter your password"
                        name="password" 
                        required
                        className="col-span-2 p-2 text-black placeholder:text-gray-600 placeholder:text-sm bg-transparent border border-gray-400 outline-none rounded-md"
                        />
                    
                    <button formAction={action} className="col-span-2 py-3 text-white bg-blue-700 hover:bg-blue-500 rounded-xl">
                        Register
                    </button>
                </form>
                <p className="text-center" >Already have an account? <Link href={"/login"} className="text-blue-700" >Login</Link></p>
            </div>
        </div>

    )
}