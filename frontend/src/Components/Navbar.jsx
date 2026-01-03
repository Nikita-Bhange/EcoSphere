import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Profile from "./Profile.jsx";
import profile from '../assets/profile.jpg'
function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const dropdownRef = useRef(null);


// const storedUser = JSON.parse(localStorage.getItem("user"));
// const userId = storedUser?._id;

const userId = "6712abce1234567890fedcba";



  const navLinkStyle =
    "text-lg text-white  font-bold transition duration-300 ease-in-out hover:text-amber-100 hover:font-bold hover:underline";

  // Logout


  // history
  const handleHistory = () => {
    setOpen(false);
    navigate("/history");
  };

  // User initial
  const initial = localStorage.getItem("userEmail") ? localStorage.getItem("userEmail")[0].toUpperCase() : "U";

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
            <NavLink to="/home" className={navLinkStyle}>
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
      
 <button onClick={() => setShowProfile(true)}
          className="relative rounded-full border border-gray-300 p-1 hover:bg-gray-100"
        >
          <img src={profile} alt="Profile" className="h-9 w-9 bg-cover rounded-full" />
        </button>
            {showProfile && (
        <Profile userId={userId} onClose={() => setShowProfile(false)} />
      )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
