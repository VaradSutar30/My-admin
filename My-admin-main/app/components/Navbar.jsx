"use client";
import { useState, useEffect, useRef } from "react";
import { FaHandsHelping, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Close settings dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3 bg-[#1b2330] rounded-lg">
      {/* Search Bar */}
      <div className="flex-1 max-w-full md:max-w-md mr-4">
        <input
          type="text"
          placeholder="Type Something"
          className="w-full pl-4 pr-4 py-2 text-sm sm:text-base
          rounded-xl bg-zinc-800 text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-zinc-600"
        />
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">
        {/* Settings */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="w-10 h-10 flex items-center justify-center
            bg-zinc-800 rounded-full text-gray-400 hover:text-white cursor-pointer"
          >
            <IoMdSettings />
          </button>

          {/* Dropdown Menu */}
          {settingsOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg flex flex-col z-50">
              <button
                onClick={() => setDark(!dark)}
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 rounded-t-lg"
              >
                {dark ? <FaSun /> : <FaMoon />} Dark Mode
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700"
              >
                <FaHandsHelping /> Help
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 rounded-b-lg"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Profile */}
        <div
          className="w-10 h-10 flex items-center justify-center
          bg-zinc-800 rounded-full cursor-pointer"
        >
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
