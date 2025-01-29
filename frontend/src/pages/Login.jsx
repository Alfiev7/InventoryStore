import { useState } from "react"
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"

export default function Login() {
  const [hasAccount, setHasAccount] = useState(false);

  const toggleHasAccount = () => setHasAccount(prev => !prev);

  return (
    <div>
      {hasAccount ? <SignInForm toggleForm={toggleHasAccount}/> : <SignUpForm toggleForm={toggleHasAccount}/>}
    </div>
  );
}
