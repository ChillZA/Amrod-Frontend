import { createBrowserRouter } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

export const router =
    createBrowserRouter([
        {
            path: "/",
            element: <CustomersPage />
        },
        {
            path: "/orders",
            element: <OrdersPage />
        },
        {
            path: "/orders/:id",
            element: <OrderDetailsPage />
        }
    ]);