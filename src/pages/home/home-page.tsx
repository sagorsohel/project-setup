import { Link } from 'react-router'

export default function HomePage() {
  return (
    <section className="page">
      <h1>Welcome to Bus Admin</h1>
      <p>This is your starting point for building the admin experience.</p>
      <div className="page__actions">
        <Link to="/login" className="button button--primary">
          Go to Login
        </Link>
        <Link to="/dashboard" className="button button--ghost">
          View Dashboard
        </Link>
      </div>
    </section>
  )
}

