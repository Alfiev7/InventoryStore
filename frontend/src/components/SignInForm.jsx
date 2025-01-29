import { useForm } from "react-hook-form";
import { FORM_FIELDS } from "../constants/FORM_FIELDS";
import { hashEmail } from "../utils/hashUtil";
import { USER_STORAGE_KEY } from "../constants/localStorageKeys";
import { mockPassword } from "../mocks/data/mockPassword";

export default function SignInForm({ toggleForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
    const hashedEmail = hashEmail(data.email);

    if (!storedData || storedData.email !== hashedEmail) {
      console.warn("User not registered.");
    } else if (mockPassword === data.password) {
      console.log("Logged in successfully!");
    } else {
      console.error("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <input
        {...register(FORM_FIELDS.email.name)}
        type={FORM_FIELDS.email.type}
        placeholder={FORM_FIELDS.email.placeholder}
      />
      <input
        {...register(FORM_FIELDS.password.name, {
          required: "Please enter a password",
        })}
        type={FORM_FIELDS.password.type}
        placeholder={FORM_FIELDS.password.placeholder}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Login</button>
      <button onClick={toggleForm}>Sign up for an account</button>
    </form>
  );
}
