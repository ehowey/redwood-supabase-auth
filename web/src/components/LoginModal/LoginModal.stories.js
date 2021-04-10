import LoginModal from './LoginModal'
import { LoginModalProvider } from 'src/lib/LoginModalContext'

export const generated = () => {
  return (
    <LoginModalProvider>
      <LoginModal />
    </LoginModalProvider>
  )
}

export default { title: 'Components/LoginModal' }
