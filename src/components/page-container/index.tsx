import { Outlet } from "react-router-dom"
import NavigationBar from "../navigation"
import { Container } from "@mui/material"

const PageContainer: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default PageContainer
