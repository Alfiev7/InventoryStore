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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5  items-center "
    >
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl">Sign Up</h1>
        <h1 className="italic  text-gray-500 text-sm">
          Register your account.
        </h1>
      </div>
      <FormFields register={register} errors={errors} />

      <button
        className="cursor-pointer w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="submit"
      >
        Sign up
      </button>
      <div className="flex items-center justify-center mt-5 text-sm ">
        <p className="text-gray-500">Already have an account?</p>
        <button
          className="text-purple-600  ml-1 cursor-pointer"
          onClick={toggleForm}
        >
          Login
        </button>
      </div>
    </form>
  );
}
