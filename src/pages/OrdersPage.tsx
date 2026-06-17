import { useState } from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../hooks/useOrders";

export default function OrdersPage() {
    const [status, setStatus] =
        useState("");
    const [page, setPage] =
        useState(1);
    const {
        data,
        isLoading,
        error
    } = useOrders(
        undefined,
        status,
        page
    );
    if (isLoading)
        return <p>Loading...</p>;
    if (error)
        return <p>Error</p>;
    return (
        <div>
            <h1>Orders</h1>
            <select
                onChange={(e) =>
                    setStatus(
                        e.target.value
                    )
                }
            >
                <option value="">
                    All
                </option>
                <option value="Pending">
                    Pending
                </option>
                <option value="Paid">
                    Paid
                </option>
                <option value="Fulfilled">
                    Fulfilled
                </option>
                <option value="Cancelled">
                    Cancelled
                </option>
            </select>
            {data?.data?.map(
                (order: any) => (
                    <div
                        key={order.id}
                    >
                        <Link
                            to={`/orders/${order.id}`}
                        >
                            {order.id}
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}