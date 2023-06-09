import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefData from "../pages/ChefData/ChefData";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate ></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: ":id",
                element: <PrivateRoutes><ChefData></ChefData></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://taste-of-italy-server-ahsaninkiad.vercel.app/chefs/${params.id}`)
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
           
        ]
    }


])

export default router;