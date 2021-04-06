import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { useUser } from 'src/lib/userContext'

const HomePage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin, signOut } = useUser()
  const { currentUser } = useAuth()

  return (
    <>
      <p>
        A simple example of auth using{' '}
        <a href="https://supabase.io/">Supabase</a>
      </p>
      <h2>Login and Signup form</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin('SIGNUP', email, password)
          }}
        >
          Sign up
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin('LOGIN', email, password)
          }}
        >
          Login
        </button>
      </form>
      <h2>Current user</h2>
      <p>{JSON.stringify(currentUser)}</p>
      <button
        onClick={(e) => {
          e.preventDefault()
          signOut()
        }}
      >
        Logout
      </button>
    </>
  )
}

export default HomePage
