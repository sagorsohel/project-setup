import type { FormEvent } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useAuthStore } from '../../stores/auth-store'

type LocationState = {
  from?: { pathname: string }
}

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const login = useAuthStore((state) => state.login)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ email, name: name || email.split('@')[0] || 'Guest' })

    const state = location.state as LocationState | undefined
    const nextPath = state?.from?.pathname ?? '/admin/dashboard'
    navigate(nextPath, { replace: true })
  }

  return (
    <section className="page page--centered">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <p>Use any values for now — replace with your auth flow later.</p>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ada Lovelace"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="ada@example.com"
            required
          />
        </label>
        <button type="submit" className="button button--primary">
          Continue
        </button>
      </form>
    </section>
  )
}

