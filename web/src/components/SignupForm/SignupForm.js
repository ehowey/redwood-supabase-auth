import { Form, FormError, Label, TextField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { useContext } from 'react'
import { LoginModalContext } from 'src/lib/LoginModalContext'

const SignupForm = () => {
  const { signUp } = useAuth()

  const [modalState, setModalState] = useContext(LoginModalContext) //eslint-disable-line

  const onSubmit = async (input) => {
    const email = input.email
    const password = input.password
    try {
      await signUp({ email, password })
      setModalState('CLOSED')
    } catch (error) {
      console.log('error', error)
      alert(error.error_description || error)
    }
  }

  return (
    <div>
      <h3 className="font-light text-lg text-gray-600">Sign up</h3>
      <Form className={`mt-4 w-full`} onSubmit={onSubmit}>
        <FormError
          // error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />
        <Label
          name="email"
          className="block text-xs font-semibold text-gray-500 uppercase"
        >
          Email
        </Label>
        <TextField
          name="email"
          className="block w-full p-1 border rounded text-sm "
          validation={{ required: true }}
        />
        <Label
          name="password"
          className="block mt-4 text-xs font-semibold text-gray-500 uppercase"
        >
          Password
        </Label>
        <TextField
          name="password"
          className="block w-full p-1 border rounded text-sm "
          validation={{ required: true }}
        />
        <Submit
          // disabled={loading}
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          Sign Up
        </Submit>
      </Form>
    </div>
  )
}

export default SignupForm
