import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between 
      text-white bg-[#1b2330] 
      px-4 sm:px-6 md:px-10 
      py-4 sm:py-6 md:py-8 
      rounded-xl shadow-md cursor-pointer">

      {/* Left Section */}
      <div className="w-full">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">
          Members
        </h1>

        {/* Member Avatars */}
        <div className="flex items-center gap-4 sm:gap-6 mt-4 
            overflow-x-auto md:overflow-visible 
            pb-2 scrollbar-hide">

          {[
            "Varad","Nainesh","Shreyash","Kunal","Yogesh","Pradip",
            "Tushar","Aditya","Shankar","Pravin","Mohit","Rohit","Amit"
          ].map((name, i) => (
            <div key={i} className="flex flex-col items-center shrink-0">
              <img
                src={`/images/image${i+1}.jfif`}
                alt={name}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                  rounded-full border-2 border-[#1b2330]"
              />
              <span className="text-[10px] sm:text-xs mt-1 text-gray-300">
                {name}
              </span>
            </div>
          ))}

          <span className="text-xs sm:text-sm text-gray-400 ml-2 shrink-0">
            +12 more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
