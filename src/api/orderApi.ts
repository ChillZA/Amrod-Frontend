import { api } from "./customerApi";

export const getOrders = async (
    customerId?: string,
    status?: string,
    page = 1,
    pageSize = 10
) => {
    const response = await api.get("/orders", {
        params: {
            customerId,
            status,
            page,
            pageSize
        }
    });
    return response.data;
};


export const getOrder = async (id: string) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
};


export const createOrder = async (request: any) => {
    const response = await api.post("/orders", request);
    return response.data;
};
