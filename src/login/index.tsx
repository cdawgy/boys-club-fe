import { Box, Typography, TextField, Button } from "@mui/material"
import axios, { type AxiosResponse } from "axios"
import React, { useState } from "react"
import type { StrapiLoginPayload, StrapiAuthResponse } from "../auth/Auth.types"

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const attemptLogin = () => {
    const loginPayload: StrapiLoginPayload = {
      identifier: username,
      password: password,
    }
    axios
      .post("http://localhost:1337/api/auth/local", loginPayload)
      .then((response: AxiosResponse<StrapiAuthResponse>) => {
        // TODO: Introduce Redux to store this in memory instead of persisting to local storage
        const jwt = response.data.jwt
        const user = response.data.user
        localStorage.setItem("jwt", jwt) // TODO: This seems to be set to 1 month. Need to shorten it to 1 hour
        localStorage.setItem("user", JSON.stringify(user))
        alert("Success")
      })
      .catch((err) => alert("Login attempt failed!"))
  }

  return (
    <>
      <h1>Boys Club</h1>
      <Box
        sx={{
          backgroundColor: "white",
          padding: 3,
          color: "#333",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          sx={{ mb: 3, display: "block" }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          sx={{ mb: 3, display: "block" }}
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={attemptLogin}
          variant="contained"
          sx={{ display: "block", margin: "auto" }}
        >
          Submit
        </Button>
      </Box>
    </>
  )
}

export default LoginPage
