import React from "react";

const TopHeader = () => {
  return (
    <div className="flex items-start justify-between text-white bg-[#1b2330] px-10 py-8 rounded-lg">

      {/* LEFT SIDE */}
      <div>
        <h1 className="text-3xl font-semibold text-yellow-400">
          Hii Varad !!
        </h1>
        <p className="mt-2 max-w-xl text-sm text-gray-400">
          Welcome Home! Great weather today – sun shining and a refreshing breeze.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-right">
        <p className="text-6xl font-semibold text-yellow-400">15:50</p>
        <p className="text-2xl font-semibold text-gray-400">
          Saturday January 20, 2023
        </p>

        <div className="flex items-center justify-end gap-2 text-yellow-400 text-sm mt-2">
          <span className="w-3 h-3 rounded-full bg-sky-400"></span>
          <span>+15°C</span>
        </div>
      </div>


    </div>
  );
};

export default TopHeader;
