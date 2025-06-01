import { Provider } from "react-redux"
import AppRoutes from "./routes"
import { store } from "./store/store"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme/theme"
import { CssBaseline } from "@mui/material"
import { routes } from "./routes/routes"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <AppRoutes routes={routes} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
