import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Inventory Store</h1>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
}
