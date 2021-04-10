import LoginForm from './LoginForm'
import { LoginModalProvider } from 'src/lib/LoginModalContext'

export const generated = () => {
  return (
    <LoginModalProvider>
      <LoginForm />
    </LoginModalProvider>
  )
}

export default { title: 'Components/LoginForm' }
