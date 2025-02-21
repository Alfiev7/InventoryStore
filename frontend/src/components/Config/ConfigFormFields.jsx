import { CONFIG_FORM_FIELDS } from '../../constants/CONFIG_FORM_FIELDS';

const ConfigFieldForm = ({ register, field }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-2 w-full">
        <p className="text-gray-600 text-sm">{field.title}</p>
        <input
          className="border-1 border-gray-300 p-2 rounded-lg text-sm w-full mb-3"
          {...register(field.name)}
          type={field.type}
          placeholder={field.placeholder}
        />
      </div>
    </div>
  );
};

export default function ConfigFormFields({ register }) {
  return (
    <div>
      {Object.values(CONFIG_FORM_FIELDS).map((field) => (
        <ConfigFieldForm key={field.name} register={register} field={field} />
      ))}
    </div>
  );
}
