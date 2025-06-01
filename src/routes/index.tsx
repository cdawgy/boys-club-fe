import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoute from "./private"
import LoginPage from "../login"
import Club from "../pages/club"

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/club" element={<Club />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
