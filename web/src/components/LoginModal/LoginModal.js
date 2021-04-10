import LoginForm from 'src/components/LoginForm'
import SignupForm from 'src/components/SignupForm'
import { useState, useContext } from 'react'
import { LoginModalContext } from 'src/lib/LoginModalContext'

const LoginModal = () => {
  const [formState, setFormState] = useState('LOGIN')

  const [modalState, setModalState] = useContext(LoginModalContext) //eslint-disable-line

  const handleSwitch = () => {
    if (formState === 'LOGIN') {
      setFormState('SIGNUP')
    }
    if (formState === 'SIGNUP') {
      setFormState('LOGIN')
    }
  }

  const handleClose = () => {
    setModalState('CLOSED')
  }
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-label="login"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <div className="md:ml-6 w-full">
                {formState === 'LOGIN' && <LoginForm />}
                {formState === 'SIGNUP' && <SignupForm />}
              </div>
              <div>
                <button onClick={handleClose} className={`color-gray-500`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              className="text-blue-500 background-transparent font-bold uppercase px-8 py-3 outline-none  ease-linear transition-all duration-150 flex hover:underline focus:underline active:underline text-sm"
              type="button"
              onClick={handleSwitch}
            >
              {formState === 'LOGIN' && `Dont have an account? Sign up! →`}
              {formState === 'SIGNUP' && `Already have an account? Login! →`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
