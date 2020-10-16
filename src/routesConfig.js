import Home from "./pages/home/home"
import Integrantes from "./pages/integrantes/integrantes"
import Login from "./pages/login/login"


const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/integrantes",
        component: Integrantes,
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    },
]

export default routesConfig;