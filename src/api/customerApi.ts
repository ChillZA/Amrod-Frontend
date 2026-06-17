import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:5001/api"
});

export const getCustomers = async (
    search: string,
    page: number,
    pageSize: number
) => {
    const response = await api.get("/customers", {
        params: {
            search,
            page,
            pageSize
        }
    });
    return response.data;
};

export const createCustomer = async (customer: any) => {
    const response = await api.post("/customers", customer);
    return response.data;
};
