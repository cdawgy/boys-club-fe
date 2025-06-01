import { Container, Snackbar } from "@mui/material"
import React, { useState } from "react"
import LoginForm from "./form"

const LoginPage: React.FC = () => {
  const [isInvalidLoginAttempt, setIsInvalidLoginAttempt] =
    useState<boolean>(false)

  return (
    <Container>
      <LoginForm setIsInvalidLoginAttempt={setIsInvalidLoginAttempt} />
      <Snackbar
        open={isInvalidLoginAttempt}
        autoHideDuration={3000}
        onClose={() => setIsInvalidLoginAttempt(false)}
        message="Username or password incorrect"
      />
    </Container>
  )
}

export default LoginPage
