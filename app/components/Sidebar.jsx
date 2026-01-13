"use client";
import { IoMdHome } from "react-icons/io";
import { MdHolidayVillage, MdSecurity } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div
      className="
      fixed md:static bottom-0 left-0 w-full md:w-56
      h-16 md:h-full
      bg-gray-900 shadow-lg
      px-2 md:p-4
      flex md:flex-col flex-row
      justify-between md:justify-start
      text-white z-50"
    >
      {/* Logo - hidden on mobile */}
      <div className="hidden md:flex items-center gap-3 mb-8">
        <img
          src="/images/villa.jfif"
          alt="picture"
          className="w-40 h-24 object-cover rounded border"
        />
      </div>

      {/* Menu */}
      <nav className="flex md:flex-col flex-row items-center gap-2 flex-1 justify-around md:justify-start">

        <SidebarButton icon={<IoMdHome />} text="Home" link="/" />
        <SidebarButton icon={<MdHolidayVillage />} text="Rooms" link="/rooms" />
        <SidebarButton icon={<MdSecurity />} text="Security" link="/notification" />
        <SidebarButton icon={<BiSolidCctv />} text="CCTV" link="/cctv" />

      </nav>

      {/* Bottom Buttons - hidden on mobile */}
      <div className="hidden md:flex flex-col gap-2 pt-6 border-t border-gray-700">
        <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium">
          <IoMdSettings /> Settings
        </button>

        <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium">
          <FaHandsHelping /> Help
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
