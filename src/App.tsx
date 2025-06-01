import { Provider } from "react-redux"
import AppRoutes from "./routes"
import { store } from "./store/store"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme/theme"
import { CssBaseline } from "@mui/material"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  )
}

export default App
