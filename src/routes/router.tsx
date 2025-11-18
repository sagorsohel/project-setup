import { createBrowserRouter } from 'react-router'
import HomePage from '../pages/home/home-page'
import LoginPage from '../pages/auth/login-page'
import DashboardPage from '../pages/dashboard/dashboard-page'
import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout'

const router = createBrowserRouter([
  // 🌐 Website routes
  {
    path: "/",

    children: [
      { index: true, element: <HomePage /> }, // same as path: "/"

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
    element: <AdminPanelLayout />, // Dashboard layout wrapper
    children: [
      { path: "dashboard", element: <DashboardPage /> }, // /admin/dashboard

    ],
  },

  // 👤 User Login (no layout)
  {
    path: "/user/login",
    element: <LoginPage />,
  },


]);

export default router