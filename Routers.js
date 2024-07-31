import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home"
import Login from "./components/auth/Login";
import DefaultLayout from "./components/layouts/DefaultLayouts";
import SignUp from "./components/auth/SignUp";
import ProductShow from "./components/products/ProductShow";
import Carded from "./components/Cards/Carded";

export default function Routers(){
    const router = createBrowserRouter([
        {
            path:'/',
            element: <DefaultLayout/>,
            children:[
                { index:true, element: <Home /> },
                { path: 'product', element: <ProductShow /> },
                { path: 'cart', element: <Carded /> },
                { path: 'signup', element: <SignUp /> },
                { path: 'login', element: <Login /> }
            ]
        }

    ]);
    return <RouterProvider  router={router}/>
}