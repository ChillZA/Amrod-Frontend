import { useParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";

export default function OrderDetailsPage() {
    const { id } = useParams();
    const {
        data,
        isLoading
    } = useOrder(id!);

    if (isLoading)
        return <p>Loading...</p>;
    
    return (
        <div>
            <h2>Order Details</h2>
            <p>
                Status:
                {data.status}
            </p>
            <p>
                Currency:
                {data.currencyCode}
            </p>
            <p>
                Total:
                {data.totalAmount}
            </p>
        </div>
    );
}