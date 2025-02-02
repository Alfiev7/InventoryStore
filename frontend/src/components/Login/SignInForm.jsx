import { useForm } from "react-hook-form";
import { hashEmail } from "../../utils/hashUtil";
import { USER_STORAGE_KEY } from "../../constants/localStorageKeys";
import { mockPassword } from "../../mocks/data/credentials";
import FormFields from "./FormFields";

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
      <FormFields register={register} errors={errors} />
      <button type="submit">Login</button>
      <button onClick={toggleForm}>Sign up for an account</button>
    </form>
  );
}
