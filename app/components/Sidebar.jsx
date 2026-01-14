"use client";
import { IoMdHome } from "react-icons/io";
import { MdHolidayVillage, MdSecurity } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <aside
      className="
        fixed bottom-0 left-0 w-full h-22
        md:static md:w-56 md:h-screen
        bg-[#111827] text-white shadow-lg z-100
        flex md:flex-col items-center md:items-stretch
      "
    >
      {/* Logo – desktop only */}
      <div className="hidden md:flex justify-center py-6 border-gray-700">
        <img
          src="/images/villa.jfif"
          alt="logo"
          className="w-40 h-24 object-cover rounded"
        />
      </div>

      <nav
  className="
    flex flex-row md:flex-col
    items-center md:items-start
    justify-around md:justify-start
    flex-1 w-full
    px-2 md:px-4
    gap-2 md:gap-3
  "
>
  <SidebarButton icon={<IoMdHome />} text="Home" link="/" />
  <SidebarButton icon={<MdHolidayVillage />} text="Rooms" link="/rooms" />
  <SidebarButton icon={<MdSecurity />} text="Security" link="/notification" />
  <SidebarButton icon={<BiSolidCctv />} text="CCTV" link="/cctv" />
</nav>

    </aside>
  );
};

export default Sidebar;
