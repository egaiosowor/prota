import { SignUp } from "./actions"
import SignUpForm from "./signUpForm"

export default function SignUpPage() {
  return (
    <main className='h-screen w-screen grid items-center justify-center' >
      <SignUpForm action={SignUp} />
    </main>
  )
}