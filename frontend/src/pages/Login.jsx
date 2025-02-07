import { useState } from "react";
import SignInForm from "../components/Login/SignInForm";
import SignUpForm from "../components/Login/SignUpForm";

export default function Login() {
  const [hasAccount, setHasAccount] = useState(false);

  const toggleHasAccount = () => setHasAccount((prev) => !prev);

  return (
    <div className=" h-screen flex justify-center items-center font-serif m-auto">
      <div className="w-80 h-2/4 p-15 rounded-xl shadow-lg flex flex-col items-center justify-center border-t-4 border-purple-600 lg:w-92 bg-white">
        {hasAccount ? (
          <SignInForm toggleForm={toggleHasAccount} />
        ) : (
          <SignUpForm toggleForm={toggleHasAccount} />
        )}
      </div>
    </div>
  );
}
