import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axois from "axios"; // use axios directly or your custom api instance
import LoadingIndicator from "../Components/LoadingIndicator";
import axios from "axios";

function Registration({ route = "/api/user/register/", method = "register" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "SignUp";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/register", {
        username,
        email,
        password,
      });

      console.log("Response:", response.data);

      // Example: navigate to login after successful signup
      if (method === "register") {
        navigate("/loginform");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
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
        <h1 className="font-semibold text-2xl pb-3">{name}</h1>

        <input
          className="w-[90%] p-2 my-2 border border-gray-300 rounded"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />

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
          className="w-[95%] p-2 my-5 bg-gradient-to-r from-green-700 via-[#B2EC5D] to-[#00AB66] font-bold rounded hover:text-white"
          type="submit"
        >
          {name}
        </button>

        <p>
          Already a member?
          <Link className="hover:text-blue-700 text-green-900" to="/loginform">
            {" "}
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;