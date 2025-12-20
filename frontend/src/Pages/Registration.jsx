import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import axios from "axios";

function Registration({ route = "/api/user/register/", method = "register" }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const name = method === "login" ? "Login" : "SignUp";

  // 🔐 Password rule: at least 1 letter, 1 number, 1 special char
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Email validation
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    // ✅ Password strength validation
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one letter, one number, and one special character"
      );
      return;
    }

    // ✅ Confirm password check
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/registration",
        {
          username,
          email,
          password,
        }
      );

      console.log("Response:", response.data);

      if (method === "register") {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      
      <div class="flex bg-white flex-col  mx-auto my-10 p-10 gap-6 rounded-xl shadow-xl w-full max-w-[400px] ">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p class="text-gray-600">Sign up to get started</p>
        </div>


      <form
        onSubmit={handleSubmit}
        className="flex bg-white flex-col  "
      >
        {/* ❌ Error message */}
        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        {/* <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
          User Name
        </label>

        <input
          className="w-[90%] p-2 mb-2 border border-gray-300 rounded"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        /> */}
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          className="w-[90%] p-2 mb-2  border border-gray-300 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          className="w-[90%] p-1 mb-2 border border-gray-300 rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        {/* 🔁 Confirm Password */}
        <label for="confirmpassword" class="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <input
          className="w-[90%] p-2 mb-2 border border-gray-300 rounded"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <p className="text-[15px] pl-3 text-red-400">(Password must contain at least one letter, one number, and one special character)</p>

        {loading && <LoadingIndicator />}

        <button
          className="w-[95%] p-2 my-3 bg-gradient-to-r from-green-700 via-[#B2EC5D] to-[#00AB66] font-bold rounded hover:text-white"
          type="submit"
          disabled={loading}
        >
          {name}
        </button>

        <p>
          Already a member?
          <Link className="hover:text-blue-700 text-green-900" to="/">
            {" "}
            Login Now
          </Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Registration;
