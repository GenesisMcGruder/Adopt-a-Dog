import App from "./App";
import Home from "./Home";
import Adopt from "./Adopt";
import Rehome from "./ReHome";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement:<ErrorPage />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path: "/Adopt",
                element: <Adopt />
            },
            {
                path:"/Rehome",
                element: <Rehome />
            }
        ]
    }
]

export default routes;