type AppRoute = {
    path: string
    name: string
    isProtected: boolean
    isDisplayed: boolean
    element?: React.FC
}

type ParentRoute = AppRoute & {
    children: AppRoute[]
}

export type {AppRoute, ParentRoute}