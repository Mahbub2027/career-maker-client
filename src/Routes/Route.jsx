import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/HomePages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import AddServices from "../pages/Dashboard/AddServices/AddServices";
import ServicesDetails from "../pages/HomePages/Services/ServicesDetails";
import AllServices from "../pages/AllServices/AllServices";
import PrivateRoute from "./PrivateRoute";
import MySchedules from "../pages/Dashboard/MySchedules/MySchedules";
import MyServices from "../pages/Dashboard/MyServices/MyServices";
import UpdateServices from "../UpdateServices/UpdateServices";
// import BrowserTab from "../BrowserTab/BrowserTab";
// import Services from "../pages/HomePages/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/tab',
            //     element: <BrowserTab></BrowserTab>
            // },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://career-maker-server-six.vercel.app/services/${params.id}`)
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>,
                loader: ()=> fetch('https://career-maker-server-six.vercel.app/services')
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/mySchedules',
                element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
            },
            {
                path: '/myServices',
                element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
                loader: ()=> fetch('https://career-maker-server-six.vercel.app/services')
            },
            {
                path: '/updateServices/:id',
                element: <UpdateServices></UpdateServices>,
                loader: ({params}) => fetch(`https://career-maker-server-six.vercel.app/services/${params.id}`)
            }
        ]
    }
]);

export default router;


