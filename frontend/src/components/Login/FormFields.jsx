import { FORM_FIELDS } from "../../constants/FORM_FIELDS";

export default function FormFields({ register, errors }) {
  return (
    <div>
      <input
        {...register(FORM_FIELDS.email.name)}
        type={FORM_FIELDS.email.type}
        placeholder={FORM_FIELDS.email.placeholder}
      />
      <input
        {...register(
          FORM_FIELDS.password.name,
          FORM_FIELDS.password.validation
        )}
        type={FORM_FIELDS.password.type}
        placeholder={FORM_FIELDS.password.placeholder}
      />
      {errors.password && <p>{errors.password.message}</p>}
    </div>
  );
}
