import { Box, Button, TextField, Typography } from "@mui/material"
import axios, { type AxiosResponse } from "axios"
import React, { useState } from "react"
import type {
  StrapiLoginPayload,
  StrapiAuthResponse,
} from "../../auth/Auth.types"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../../auth/authSlice"

interface LoginFormProps {
  setIsInvalidLoginAttempt: (isInvalid: boolean) => void
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { setIsInvalidLoginAttempt } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)

  const attemptLogin = () => {
    const loginPayload: StrapiLoginPayload = {
      identifier: username,
      password: password,
    }
    axios
      .post("http://localhost:1337/api/auth/local", loginPayload)
      .then((response: AxiosResponse<StrapiAuthResponse>) => {
        dispatch(login(response.data))
        navigate("/club")
      })
      .catch((err: Error) => setIsInvalidLoginAttempt(true))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoggingIn(true)
    attemptLogin()
  }

  return (
    <Box
      sx={{
        "& > *": {
          display: "block",
          width: "100%",
          marginBottom: 2,
        },
        maxWidth: 500,
        margin: "0 auto",
        background: (theme) => theme.palette.background.paper,
        padding: 3,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" textAlign="center">
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
        sx={{
          width: "100%",
          marginBottom: 2,
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        sx={{
          width: "100%",
          marginBottom: 2,
        }}
      />
      <Button
        disabled={isLoggingIn}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </Box>
  )
}

export default LoginForm
