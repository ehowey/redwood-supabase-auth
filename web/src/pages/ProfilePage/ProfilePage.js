import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const ProfilePage = () => {
  const { currentUser, logOut } = useAuth()

  const signOut = async () => {
    logOut()
    navigate(routes.home())
  }

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

export default ProfilePage
