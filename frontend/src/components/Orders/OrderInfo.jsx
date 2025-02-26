import { coupons } from '../../mocks/data/coupons';

export default function OrderInfo({ order }) {
  const couponDetails = order.coupons[0] ? coupons.find((coupon) => coupon.id === order.coupons[0].id) : null;

  const orderFields = [
    { label: 'Name', value: order.name },
    { label: 'Total Amount', value: `$${order.totalAmount.toFixed(2)}` },
    { label: 'Number of Items', value: order.items.length },
    { label: 'Date', value: order.date },
    { label: 'Address', value: order.address },
    { label: 'City', value: order.city },
    { label: 'Phone Number', value: order.phone },
    { label: 'Country', value: order.country },
    { label: 'Coupon Name', value: couponDetails ? couponDetails.name : 'No coupon applied' },
    { label: 'Coupon Information', value: couponDetails ? couponDetails.information : 'N/A' },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 text-gray-700">
        {orderFields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-gray-500">{field.label}:</span>
            <span className="text-lg font-semibold text-purple-700">{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
