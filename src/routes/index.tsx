import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Home from "../page/Home";


const routes = createBrowserRouter([
    {
        path:"/",
        element: <App />
    },
    {
        path:"/home",
        element: <Home />
    },
    {
        path:"/login",
        element: <Login />
    }
]);

export default routes;