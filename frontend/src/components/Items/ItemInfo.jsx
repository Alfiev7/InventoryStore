import { ITEMINFO_FIELDS } from '../../constants/ITEMINFO_FIELDS';
import Field from '../field/Field';
import { DOLLAR } from '../../constants/globals';

export default function ItemInfo({ item }) {
  return (
    <div className="grid grid-cols-2 gap-6 text-gray-700 font-semibold">
      {ITEMINFO_FIELDS.map(({ label, key }) => {
        let value = item[key];

        if (key === 'price' || key === 'discountPrice') {
          value = `${DOLLAR}${value}`;
        }

        return <Field key={key} label={label} value={value} />;
      })}

      {item.availableColors && item.availableColors.length > 0 && (
        <div className="col-span-2">
          <div className="mb-1">Colors:</div>
          <div className="flex gap-4">
            {item.availableColors.map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded border shadow"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      {item.previewImage && (
        <div className="col-span-2">
          <div className="mb-1">Image:</div>
          <div className="flex overflow-x-auto gap-4">
            <img
              src={item.previewImage}
              alt="Item preview"
              className="h-32 rounded shadow object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
