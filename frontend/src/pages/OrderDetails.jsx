import { useParams } from 'react-router-dom';
import { mockOrders } from '../mocks/data/mockOrders';
// import OrderItemsTable from '../components/Orders/OrderItemsTable';
import OrderInfo from '../components/Orders/OrderInfo';

export default function OrderDetails() {
  const { order_id } = useParams();
  const order = mockOrders.find((order) => order.id === parseInt(order_id));

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full border border-gray-200 flex flex-col">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Order Details</h1>

        <OrderInfo order={order} />
        {/* <OrderItemsTable orderItems={order.items} /> */}

      </div>
    </div>
  );
}
