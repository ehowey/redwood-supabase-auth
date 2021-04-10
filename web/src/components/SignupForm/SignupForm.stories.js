import SignupForm from './SignupForm'
import { LoginModalProvider } from 'src/lib/LoginModalContext'

export const generated = () => {
  return (
    <LoginModalProvider>
      <SignupForm />
    </LoginModalProvider>
  )
}

export default { title: 'Components/SignupForm' }
