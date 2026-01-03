import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;


// const API_URL = process.env.REACT_APP_API_URL;
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
        `${API_URL}/api/v1/auth/login`,
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
    <div className="flex items-center justify-center min-h-screen">
      

 
      <div className="flex bg-white flex-col  mx-auto my-12 p-10 gap-6 rounded-xl shadow-xl w-full max-w-[400px] ">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        




      <form
        onSubmit={handleSubmit}
        className="flex bg-white flex-col  "
      >
        

       
        {error && (
          <p className="text-red-600 text-sm text-center">
            {error}
          </p>
        )}
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
        <input
          className="w-full h-12 px-5 text-lg border border-gray-300 rounded-lg"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
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
    </div>
  );
}

export default Login;


// bg-gradient-to-r from-[#E9FFDB] via-[#B2EC5D] to-[#00AB66]