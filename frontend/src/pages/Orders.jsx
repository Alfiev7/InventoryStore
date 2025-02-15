import OrdersTable from '../components/Orders/OrdersTable';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const navigate = useNavigate();

  const onOrderClick = (orderId) => {
    console.log('Navigating to order:', orderId);
    navigate(`/orders/${orderId}`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-purple-700 mb-6">Orders</h2>
      <OrdersTable onOrderClick={onOrderClick} />
    </div>
  );
}
