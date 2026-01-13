import React from "react";

const TopHeader = () => {
  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center 
      justify-between gap-4 
      text-white bg-[#1b2330] 
      px-4 sm:px-6 md:px-10 
      py-4 rounded-lg"
    >
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-400">
          Hii Varad !!
        </h1>
        <p className="mt-2 max-w-xl text-xs sm:text-sm text-gray-400">
          Welcome Home! Great weather today – sun shining and a refreshing breeze.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-left sm:text-right w-full sm:w-auto">
        <p className="text-3xl sm:text-4xl md:text-6xl font-semibold text-yellow-400">
          15:50
        </p>
        <p className="text-sm sm:text-base md:text-2xl font-semibold text-gray-400">
          Saturday January 20, 2023
        </p>

        <div className="flex items-center sm:justify-end gap-2 text-yellow-400 text-xs sm:text-sm mt-1 sm:mt-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
          <span>+15°C</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
