import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { LoginModalProvider } from 'src/lib/LoginModalContext'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './scaffold.css'
import './index.css'

const supabaseClient = createClient(
  process.env.SUPABASE_URL, //eslint-disable-line
  process.env.SUPABASE_KEY //eslint-disable-line
)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={supabaseClient} type="supabase">
      <RedwoodApolloProvider>
        <LoginModalProvider>
          <Routes />
        </LoginModalProvider>
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
