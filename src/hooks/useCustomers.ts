import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../api/customerApi";

export const useCustomers = (
    search: string,
    page: number
) => {
    return useQuery({
        queryKey: ["customers", search, page],
        queryFn: () =>
            getCustomers(search, page, 10)
    });
};