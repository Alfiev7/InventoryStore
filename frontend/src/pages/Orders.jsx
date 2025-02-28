import OrdersTable from '../components/Orders/OrdersTable';
import Header from '../components/header/Header';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const navigate = useNavigate();

  const onOrderClick = (orderId) => {
    console.log('Navigating to order:', orderId);
    navigate(`/orders/${orderId}`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <Header>Orders</Header>
      <OrdersTable onOrderClick={onOrderClick} />
    </div>
  );
}
