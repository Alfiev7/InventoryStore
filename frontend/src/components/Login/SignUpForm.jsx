import { useForm } from "react-hook-form";
import { hashEmail } from "../../utils/hashUtil";
import { USER_STORAGE_KEY } from "../../constants/localStorageKeys";
import FormFields from "./FormFields";
import AuthenticationForm from "./AuthenticationForm";
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
    <AuthenticationForm
      title="Sign Up"
      subtitle="Register your account."
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormFields register={register} errors={errors} />

      <button
        className="cursor-pointer w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="submit"
      >
        Sign up
      </button>

      <div className="flex items-center justify-center mt-5 text-sm">
        <p className="text-gray-500">Already have an account?</p>
        <button
          className="text-purple-600 ml-1 cursor-pointer"
          onClick={toggleForm}
        >
          Login
        </button>
      </div>
    </AuthenticationForm>
  );
}
