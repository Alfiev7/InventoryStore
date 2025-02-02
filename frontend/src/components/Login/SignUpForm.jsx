import { useForm } from "react-hook-form";
import { hashEmail } from "../../utils/hashUtil";
import { USER_STORAGE_KEY } from "../../constants/localStorageKeys";
import FormFields from "./FormFields";

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
      <FormFields register={register} errors={errors} />
      <button type="submit">Sign up</button>
      <button onClick={toggleForm}>Already have an account?</button>
    </form>
  );
}
