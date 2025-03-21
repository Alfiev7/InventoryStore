import { ORDERINFO_FIELDS } from "../../constants/ORDERINFO_FIELDS";
import Field from '../field/Field';
export default function OrderInfo({ order }) {
  return (
    <div className="grid grid-cols-2 gap-6 text-gray-700 font-semibold">
      {ORDERINFO_FIELDS.map(({ label, key, prefix = "", isArray }) => (
        <Field 
          key={key} 
          label={label} 
          value={isArray ? order[key].length : `${prefix}${order[key]}`} 
        />
      ))}
    </div>
  );
}
  