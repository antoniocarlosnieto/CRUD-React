import Home from "./pages/home/home"
import User from "./pages/user/user"

const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/user",
        component: User,
        exact: true,
    },
]

export default routesConfig;