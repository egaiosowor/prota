import { login } from '../../utils/actions'
import LoginForm from '@/components/loginForm'

export default function LoginPage() {
  return (
    <main className='h-screen w-screen grid items-center justify-center' >
      <LoginForm action={login} />
    </main>
  )
}