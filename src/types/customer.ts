export interface Customer {
id: string;
name: string;
email: string;
countryCode: string;
createdAt: string;
}

export interface CreateCustomerRequest {
name: string;
email: string;
countryCode: string;
}