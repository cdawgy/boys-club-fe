import LoginPage from "../login"
import Books from "../pages/books"
import Club from "../pages/club"
import type { ParentRoute } from "./Routes.types"

export const routes: ParentRoute[] = [
    {
        path: "/",
        name: "Login",
        isProtected: false,
        isDisplayed: false,
        element: LoginPage,
        children: []
    },
    {
        path: "/club",
        name: "Club",
        isProtected: true,
        isDisplayed: true,
        element: Club,
        children: []
    },
    {
        path: "/books",
        name: "Books",
        isProtected: true,
        isDisplayed: true,
        element: Books,
        children: []
    }
]
