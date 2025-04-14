import { ITEMINFO_FIELDS } from '../../constants/ITEMINFO_FIELDS';
import Field from '../field/Field';
import { DOLLAR } from '../../constants/globals';
import ColorPreview from './ColorPreview';
import ImagePreview from './ImagePreview';

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
          <ColorPreview colors={item.availableColors} />
        </div>
      )}

      {item.previewImage && (
        <div className="col-span-2">
          <div className="mb-1">Image:</div>
          <ImagePreview src={item.previewImage} />
        </div>
      )}
    </div>
  );
}
