import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setToken }) {
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (username, password) => {
    setAuthLoading(true);
    setAuthError("");

    const response = await fetch(
      "https://todobackend-z5k0.onrender.com/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );
    const data = await response.json();
    setAuthLoading(false);
    if (data.token) {
      setToken(data.token);
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setAuthError(data.message || "Login Failed");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          Login
        </h2>
        {authError && (
          <div className="mb-3 text-center text-red-600 font-semibold">
            {authError}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(username, password);
          }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 
            border-2 
            border-blue-300 
            rounded w-full 
            mb-4 
            focus:ring-2 
            focus: ring-blue-400"
            placeholder="Username"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 
            border-2 
            border-blue-300 
            rounded w-full 
            mb-4 
            focus:outline-none
            focus:ring-2 
            focus: ring-blue-400"
            placeholder="Password"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded w-full transition-color duration-200"
          >
            {authLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <Link to="/signup">
            <span className="text-blue-500 hover:underline font-semibold">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
