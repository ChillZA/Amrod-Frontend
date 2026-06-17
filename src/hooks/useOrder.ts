import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../api/orderApi";


export const useOrder = (id: string) => {
    return useQuery({
        queryKey: ["order", id],
        queryFn: () => getOrder(id)
    });
};