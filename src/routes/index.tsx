import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoute from "./private"
import PageContainer from "../components/page-container"
import type { ParentRoute } from "./Routes.types"

interface AppRoutesProps {
  routes: ParentRoute[]
}

const generateRoutes = (routes: ParentRoute[]) => {
  return routes.map((route) => {
    return (
      <Route
        path={route.path}
        key={route.path}
        element={route.element ? <route.element /> : null}
      />
    )
  })
}

const AppRoutes: React.FC<AppRoutesProps> = (props: AppRoutesProps) => {
  const { routes } = props

  return (
    <BrowserRouter>
      <Routes>
        {generateRoutes(routes.filter((route) => !route.isProtected))}

        <Route element={<PrivateRoute />}>
          <Route element={<PageContainer />}>
            {generateRoutes(routes.filter((route) => route.isProtected))}
          </Route>
        </Route>

        <Route element={<PageContainer />}>
          <Route
            path="*"
            element={
              <div>
                <h1>404 - Page Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
