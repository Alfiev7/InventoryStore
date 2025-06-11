import { NEW_ITEM_FORM_FIELDS } from '../../constants/NEW_ITEM_FORM_FIELDS';
import ItemModalField from './ItemModalField';

export default function ItemModalFormFields({ formData, handleChange, options }) {
  return Object.values(NEW_ITEM_FORM_FIELDS).map((field) => (
    <ItemModalField
      key={field.name}
      field={field}
      value={formData[field.name]}
      onChange={handleChange}
      options={field.name === 'category' ? options : null}
    />
  ));
}
