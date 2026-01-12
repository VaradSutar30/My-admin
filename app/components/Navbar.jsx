"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaMicrophone, FaMoon, FaSun } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="w-full flex items-center justify-between px-6 py-3">

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Type Something"
          className="w-full pl-10 pr-10 py-2 rounded-xl bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-600"
        />

        <FaMicrophone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 ml-6">

        {/* Dark Mode Button */}
        <button
          onClick={() => setDark(!dark)}
          className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-yellow-400 hover:bg-zinc-700 transition"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        {/* Notification */}
        <div className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-gray-400 hover:text-white cursor-pointer">
          <IoNotifications />
        </div>

        {/* Profile */}
        <div className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full cursor-pointer">
          <img
            src="/images/villa.jfif"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
