import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";

function Registration() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
     

     

      // Example: navigate to login after successful signup
     
    } catch (error) {
      console.error("Error:", error);
      alert("Login  failed. Please try again.");
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
          className="w-[95%] p-2 my-5 bg-gradient-to-r from-green-700 via-[#B2EC5D] to-[#00AB66] font-bold rounded hover:text-white"
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

export default Registration;

// bg-gradient-to-r from-[#E9FFDB] via-[#B2EC5D] to-[#00AB66]