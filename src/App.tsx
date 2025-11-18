import { NavLink, Outlet } from 'react-router'
import './App.css'
import { useAuthStore } from './stores/auth-store'

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <div className="brand">Bus Admin</div>
        <nav className="app-shell__nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
        <div className="app-shell__auth">
          {isAuthenticated ? (
            <>
              <span>Hi, {user?.name ?? 'Guest'}</span>
              <button type="button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <span>Not signed in</span>
          )}
        </div>
      </header>
      <main className="app-shell__content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
