import { useParams } from 'react-router-dom';
import { mockOrders } from '../mocks/data/mockOrders';
import Header from '../components/header/Header';
import CardLayout from '../components/card-layout/CardLayout';

import OrderInfo from '../components/Orders/OrderInfo';

export default function OrderDetails() {
  const { order_id } = useParams();
  const order = mockOrders.find((order) => order.id === parseInt(order_id));

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <CardLayout>
        <Header>Order Details</Header>
        <OrderInfo order={order} />
      </CardLayout>
    </div>
  );
}
