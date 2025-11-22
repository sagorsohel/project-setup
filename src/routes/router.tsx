import { createBrowserRouter } from 'react-router'
import HomePage from '../pages/home/home-page'
import LoginPage from '../pages/auth/login-page'
import DashboardPage from '../pages/dashboard/dashboard-page'
import UserDashboardPage from '../pages/user/user-dashboard-page'
import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout'
import UserPanelLayout from '@/components/user-panel/user-panel-layout'
import { WebsiteLayout } from '@/components/website/website-layout'

const router = createBrowserRouter([
  // 🌐 Website routes (with website layout - sticky navbar & footer)
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },

  // 🧭 Admin Login (no layout)
  {
    path: "/admin/login",
    element: <LoginPage />,
  },

  // 🧭 Admin Dashboard routes
  {
    path: "/admin",
    element: <AdminPanelLayout />,
    children: [
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },

  // 👤 User Login (no layout)
  {
    path: "/user/login",
    element: <LoginPage />,
  },

  // 👤 User Panel routes
  {
    path: "/user",
    element: <UserPanelLayout />,
    children: [
      { path: "dashboard", element: <UserDashboardPage /> },
    ],
  },
]);

export default router