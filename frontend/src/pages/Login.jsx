import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [hasAccount, setHasAccount] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUpSubmit = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        email: data.email,
        password: data.password,
      })
    );
    setHasAccount(!hasAccount);
    console.log(JSON.parse(localStorage.getItem(data.email)));
  };

  const onLoginSubmit = (data) => {
    const account = localStorage.getItem(data.email);
    if (account && JSON.parse(account).password === data.password) {
      console.log("Logged in successfully");
    } else {
      console.log("Invalid credentials");
    }
  };

  return !hasAccount ? (
    <div>
      <form onSubmit={handleSubmit(onSignUpSubmit)}>
        <p>Register an Account</p>
        <input type="email" {...register("email")} />
        <input
          type="password"
          {...register("password", {
            minLength: {
              value: 6,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Sign up</button>
      </form>
      <button onClick={() => setHasAccount(!hasAccount)}>
        Already got an account? Click here
      </button>
    </div>
  ) : (
    <div>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <p>Login</p>
        <input type="email" {...register("email")} />
        <input
          type="password"
          {...register("password", {
            required: "Please enter a password",
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
      <button onClick={() => setHasAccount(!hasAccount)}>
        Sign up for an account
      </button>
    </div>
  );
}
