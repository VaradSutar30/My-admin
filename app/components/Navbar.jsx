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
    <div
      className="w-full flex flex-col sm:flex-row items-center 
      justify-between gap-3 sm:gap-0 
      px-4 sm:px-6 py-3"
    >
      {/* Search Bar */}
      <div className="relative w-full sm:max-w-xs md:max-w-md">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Type Something"
          className="w-full pl-10 pr-10 py-2 text-sm sm:text-base
          rounded-xl bg-zinc-800 text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-zinc-600"
        />

        <FaMicrophone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3 sm:gap-4">

        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
          bg-zinc-800 rounded-full text-yellow-400 hover:bg-zinc-700 transition"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        <div
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
          bg-zinc-800 rounded-full text-gray-400 hover:text-white cursor-pointer"
        >
          <IoNotifications />
        </div>

        <div
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
          bg-zinc-800 rounded-full cursor-pointer"
        >
          <img
            src="/images/villa.jfif"
            alt="profile"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
