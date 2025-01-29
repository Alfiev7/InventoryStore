import { useForm } from "react-hook-form";
import { FORM_FIELDS } from "../constants/FORM_FIELDS";
import { hashEmail } from "../utils/hashUtil";
import { USER_STORAGE_KEY } from "../constants/localStorageKeys";

export default function SignUpForm({ toggleForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const hashedEmail = hashEmail(data.email);
    localStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify({ email: hashedEmail })
    );
    toggleForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register an Account</h1>
      <input
        {...register(FORM_FIELDS.email.name)}
        type={FORM_FIELDS.email.type}
        placeholder={FORM_FIELDS.email.placeholder}
      />
      <input
        {...register(FORM_FIELDS.password.name, {
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        type={FORM_FIELDS.password.type}
        placeholder={FORM_FIELDS.password.placeholder}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Sign up</button>
      <button onClick={toggleForm}>Already have an account?</button>
    </form>
  );
}
