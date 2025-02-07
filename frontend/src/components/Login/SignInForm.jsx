import { useForm } from "react-hook-form";
import { hashEmail } from "../../utils/hashUtil";
import { USER_STORAGE_KEY } from "../../constants/localStorageKeys";
import { mockPassword } from "../../mocks/data/credentials";
import FormFields from "./FormFields";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm";

export default function SignInForm({ toggleForm }) {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
    const hashedEmail = hashEmail(data.email);

    if (!storedData || storedData.email !== hashedEmail) {
    } else if (mockPassword === data.password) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      console.error("Invalid credentials!");
    }
  };

  return (
    <AuthenticationForm
      title={"Log In"}
      subtitle={"Good to see you again."}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormFields register={register} errors={errors} />
      <button
        className=" cursor-pointer w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="submit"
      >
        Login
      </button>

      <div className="flex items-center justify-center mt-5 text-sm">
        <p className="text-gray-500">Don't have an account?</p>
        <button
          className="text-purple-600  ml-1 cursor-pointer"
          onClick={toggleForm}
        >
          Sign up
        </button>
      </div>
    </AuthenticationForm>
  );
}
