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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5  items-center "
    >
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl">Log In</h1>
        <h1 className="italic  text-gray-500 text-sm">
          Good to see you again.
        </h1>
      </div>
      <FormFields register={register} errors={errors} />

      <button
        className=" cursor-pointer w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="submit"
      >
        Login
      </button>

      <div className="flex items-center justify-center mt-5 text-sm">
        <p className="text-gray-500">Don't have an account?</p>
        <button className="text-purple-600  ml-1 cursor-pointer" onClick={toggleForm}>
          Sign up
        </button>
      </div>
    </form>
  );
}
