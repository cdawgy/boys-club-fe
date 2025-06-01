// theme.js
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Replace with your primary color
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff4081", // Replace with your secondary color
      contrastText: "#000000",
    },
    background: {
      default: "#f4f6f8", // Optional: background color
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Optionally customize headings, body, etc.
  },
  components: {
    // Optional: override component styles
    MuiButton: {
      styleOverrides: {
        root: {
        //   borderRadius: 12,
        },
      },
    },
  },
})

export default theme
