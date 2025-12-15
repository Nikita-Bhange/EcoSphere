import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinkStyle =
    "text-lg text-white font-medium transition duration-300 ease-in-out hover:text-amber-100 hover:underline";

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  // User initial
  const initial = localStorage.getItem("userEmail")
    ? localStorage.getItem("userEmail")[0].toUpperCase()
    : "U";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="h-24 bg-[#006727] shadow-md flex items-center px-16">
      <div className="flex justify-between w-full items-center">
        {/* Logo */}
        <p className="text-3xl text-white font-extrabold tracking-wide">
          EcoSort
        </p>

        {/* Navigation */}
        <ul className="flex gap-10 items-center">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/classification" className={navLinkStyle}>
              Try Tool
            </NavLink>
          </li>

          {/* Profile Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold hover:bg-green-600"
            >
              {initial}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
