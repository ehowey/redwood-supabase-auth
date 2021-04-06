import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Supabase Auth</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.profile()}>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
