import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import LoadingIndicator from "../Components/LoadingIndicator";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login success:", response.data);

      // Save token if backend returns one
      if (response.data?.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }

      navigate("/home"); // or wherever you want
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.detail || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white flex-col items-center justify-center mx-auto my-12 p-5 h-120 w-100 gap-4 rounded-lg shadow-md max-w-md"
      >
        <h1 className="font-semibold text-2xl pb-3">LogIn</h1>

        <input
          className="w-[90%] p-2 my-2 border border-gray-300 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <input
          className="w-[90%] p-2 my-2 border border-gray-300 rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        {loading && <LoadingIndicator />}

        <button
          className="w-[95%] p-2 my-5 bg-gradient-to-r from-green-700 via-[#B2EC5D] to-[#00AB66] font-bold rounded hover:cursor-pointer hover:text-white"
          type="submit"
        >
          Log In
        </button>

        <p>
          Not a Member?
          <Link className="hover:text-blue-700 text-green-900" to="/registration">
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