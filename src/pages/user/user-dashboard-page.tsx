export default function UserDashboardPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">User Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your user dashboard. Manage your profile and settings here.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p className="text-muted-foreground mb-4">
            View and update your personal information.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-muted-foreground mb-4">
            Customize your account settings and preferences.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Activity</h2>
          <p className="text-muted-foreground mb-4">
            View your recent activity and history.
          </p>
        </div>
      </div>
    </div>
  );
}

