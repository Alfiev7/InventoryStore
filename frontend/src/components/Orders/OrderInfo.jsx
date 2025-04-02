import { ORDERINFO_FIELDS } from '../../constants/ORDERINFO_FIELDS';
import Field from '../field/Field';
import OrderItemsTable from './OrderItemsTable';
import { formatCoupons } from '../../utils/formatCoupons';

export default function OrderInfo({ order }) {
  return (
    <div className="grid grid-cols-2 gap-6 text-gray-700 font-semibold">
      {ORDERINFO_FIELDS.map(({ label, key, prefix = '', isArray }) => {
        let value = isArray ? order[key].length : `${prefix}${order[key]}`;

        if (key === 'coupons') {
          value = formatCoupons(order.coupons);
        }

        return <Field key={key} label={label} value={value} />;
      })}

      <div className="col-span-2 w-full">
        <OrderItemsTable orderItems={order.items} />
      </div>
    </div>
  );
}
