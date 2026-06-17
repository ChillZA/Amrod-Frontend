export interface OrderLineItem {
productSku: string;
quantity: number;
unitPrice: number;
}

export interface Order {
id: string;
customerId: string;
status: string;
currencyCode: string;
totalAmount: number;
createdAt: string;
lineItems: OrderLineItem[];
}

export interface CreateOrderRequest {
customerId: string;
currencyCode: string;
items: OrderLineItem[];
}
