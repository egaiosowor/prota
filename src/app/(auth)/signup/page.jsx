import { SignUp } from '../../../utils/actions'
import SignUpForm from '@/app/(auth)/signup/signUpForm'

export default function SignUpPage() {
  return (
    <main className='h-screen w-screen grid items-center justify-center' >
      <SignUpForm action={SignUp} />
    </main>
  )
}