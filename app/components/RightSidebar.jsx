import React from "react";

const RightSidebar = () => {
  return (
    <div
      className="
      hidden lg:flex flex-col
      w-72 h-full bg-[#1b2330] 
      rounded-xl shadow-md p-5 text-white
      "
    >
      <h2 className="text-lg font-semibold text-yellow-400 mb-4">
        Activity
      </h2>

      {/* Notifications */}
      <div className="flex flex-col gap-3">

        <div className="bg-zinc-800 p-3 rounded-lg text-sm">
          🔔 Motion detected at Main Gate
        </div>

        <div className="bg-zinc-800 p-3 rounded-lg text-sm">
          📹 CCTV Camera 2 disconnected
        </div>

        <div className="bg-zinc-800 p-3 rounded-lg text-sm">
          🔐 Door locked successfully
        </div>

        <div className="bg-zinc-800 p-3 rounded-lg text-sm">
          🌡 Temperature stable at +15°C
        </div>

      </div>
    </div>
  );
};

export default RightSidebar;
