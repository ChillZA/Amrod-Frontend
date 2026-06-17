import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../api/orderApi";

export const useOrders = (
    customerId?: string,
    status?: string,
    page = 1
) => {
    return useQuery({
        queryKey: [
            "orders",
            customerId,
            status,
            page
        ],
        queryFn: () =>
            getOrders(
                customerId,
                status,
                page,
                10
            )
    });
};