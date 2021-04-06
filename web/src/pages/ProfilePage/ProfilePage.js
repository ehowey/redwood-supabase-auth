import { useAuth } from '@redwoodjs/auth'
import { useUser } from 'src/lib/userContext'

const HomePage = () => {
  const { currentUser } = useAuth()
  const { signOut } = useUser()

  return (
    <>
      <h2>Current User Profile</h2>
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
