import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useContext } from 'react'
import { LoginModalContext } from 'src/lib/LoginModalContext'
import LoginModal from 'src/components/LoginModal'

const BlogLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()
  const [modalState, setModalState] = useContext(LoginModalContext)

  const handleModal = () => {
    if (isAuthenticated && modalState === 'CLOSED') {
      logOut()
    }
    if (!isAuthenticated && modalState === 'CLOSED') {
      setModalState('OPEN')
    }
  }
  console.log(modalState)
  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                href="#"
                onClick={handleModal}
              >
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </button>
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
      {modalState === 'OPEN' && <LoginModal />}
    </>
  )
}

export default BlogLayout
