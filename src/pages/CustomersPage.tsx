import { useState } from "react";
import { useCustomers } from "../hooks/useCustomers";

export default function CustomersPage() {
    const [search, setSearch] =
        useState("");
    const [page, setPage] =
        useState(1);
    const {
        data,
        isLoading,
        error
    } = useCustomers(
        search,
        page
    );
    
    if (isLoading)
        return <p>Loading...</p>;
    // if (error)
    //     return <p>Error loading customers</p>;
    return (
        <div>
            <h1>Customers</h1>
            <input
                value={search}
                placeholder="Search"
                onChange={(e) =>
                    setSearch(
                        e.target.value
                    )
                }
            />
            {data?.data?.map(
                (customer: any) => (
                    <div
                        key={customer.id}
                    >
                        {customer.name}
                    </div>
                )
            )}
        </div>
    );
}
