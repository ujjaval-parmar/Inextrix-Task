import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import FavoritesPage from "../pages/FavoritesPage";

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
            {
                path: '/favorites',
                element: <FavoritesPage />
            }
        ],
        errorElement: <ErrorPage />
    }




])



export default router;