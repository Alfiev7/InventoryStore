import { NEW_ITEM_FORM_FIELDS } from '../../constants/NEW_ITEM_FORM_FIELDS';
import NewItemField from './NewItemField';

export default function NewItemFormFields({ formData, handleChange, categories }) {
  return (
    <>
      {Object.values(NEW_ITEM_FORM_FIELDS).map((field) => (
        <NewItemField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
          options={field.name === 'category' ? categories : null}
        />
      ))}
    </>
  );
}
