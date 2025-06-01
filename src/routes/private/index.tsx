import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import type { ReduxAuthState } from "../../auth/authSlice"

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: ReduxAuthState) => state.auth.isAuthenticated
  )
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}

export default PrivateRoute
