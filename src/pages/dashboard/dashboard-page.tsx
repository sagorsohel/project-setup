import { useAuthStore } from '../../stores/auth-store'

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)

  return (
    <section className="page">
      <h1>Dashboard</h1>
      <p>Only authenticated users can view this route.</p>
      <div className="card">
        <h2>Welcome back{user?.name ? `, ${user.name}` : ''}!</h2>
        <p>Replace this section with real widgets and analytics.</p>
      </div>
    </section>
  )
}

