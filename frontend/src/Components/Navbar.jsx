import React from 'react'
import { Link, NavLink } from "react-router-dom";



function Navbar() {
  const navLinkStyle =
  'text-lg text-white font-medium transition duration-300 ease-in-out hover:text-amber-100 hover:underline';

return (
  <>
    <div className="h-24 bg-[#006727] shadow-md flex items-center px-16">
      <div className="flex justify-between w-full items-center">
        {/* Logo */}
        <p className="text-3xl text-white font-extrabold tracking-wide">
          EcoSort
        </p>

        {/* Navigation */}
        <ul className="flex gap-10">
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
          <li>
            <NavLink to="/loginform" className={navLinkStyle}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </>

  )
}

export default Navbar