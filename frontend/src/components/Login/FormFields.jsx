import { FORM_FIELDS } from "../../constants/FORM_FIELDS";

export default function FormFields({ register, errors }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <input  className="border-1 border-gray-300 p-2 rounded-lg"
        {...register(FORM_FIELDS.email.name)}
        type={FORM_FIELDS.email.type}
        placeholder={FORM_FIELDS.email.placeholder}
      />
      <input className="border-1 border-gray-300 p-2 rounded-lg"
        {...register(
          FORM_FIELDS.password.name,
          FORM_FIELDS.password.validation
        )}
        type={FORM_FIELDS.password.type}
        placeholder={FORM_FIELDS.password.placeholder}
      />
      {errors.password && <p className="text-red-600">{errors.password.message}</p>}
    </div>
  );
}
