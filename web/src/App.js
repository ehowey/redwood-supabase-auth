import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { UserProvider } from 'src/lib/userContext'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={supabaseClient} type="supabase">
      <RedwoodApolloProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
