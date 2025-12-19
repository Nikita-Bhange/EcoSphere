import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import LoadingIndicator from "../Components/LoadingIndicator";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // 👈 NEW
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // reset error on new submit

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login success:", response.data);

      if (response.data?.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }

      navigate("/home");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);

      // 👇 Toggle error message
      setError(
        error.response?.data?.detail ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white flex-col items-center justify-center mx-auto my-12 p-10 gap-6 rounded-xl shadow-xl w-full max-w-[400px]"
      >
        <h1 className="font-semibold text-2xl pb-3">Log In</h1>

        {/* ❌ Error Message */}
        {error && (
          <p className="text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        <input
          className="w-full h-12 px-5 text-lg border border-gray-300 rounded-lg"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <input
          className="w-full h-12 px-5 text-lg border border-gray-300 rounded-lg"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        {loading && <LoadingIndicator />}

        <button
          className="w-full h-11 text-lg my-4 bg-gradient-to-r from-green-700 via-[#B2EC5D] to-[#00AB66] font-bold rounded-lg hover:text-white"
          type="submit"
          disabled={loading}
        >
          Log In
        </button>

        <p>
          Not a Member?
          <Link
            className="hover:text-blue-700 text-green-900"
            to="/registration"
          >
            {" "}
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;


// bg-gradient-to-r from-[#E9FFDB] via-[#B2EC5D] to-[#00AB66]