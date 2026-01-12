import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-white bg-[#1b2330] px-10 py-8 rounded-xl shadow-md cursor-pointer">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-yellow-400">
          Members
        </h1>

        {/* Member Avatars */}
        <div className="flex items-center mt-3 gap-6">
          
          {/* Member 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image1.jfif"
              alt="Varad"
              className="w-9 h-9 rounded-full border-1 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Varad</span>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image2.jfif"
              alt="Nainesh"
              className="w-9 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Nainesh</span>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image3.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Shreyash</span>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image4.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Kunal</span>
          </div>

          {/* Member 5 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image5.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Yogesh</span>
          </div>

          {/* Member 6 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image6.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Pradip</span>
          </div>

          {/* Member 7 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image7.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Tushar</span>
          </div>

          {/* Member 8 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image8.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Aditya</span>
          </div>

          {/* Member 9 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image9.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Shankar</span>
          </div>

          {/* Member 10 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image10.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Pravin</span>
          </div>

          {/* Member 11 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/image11.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Mohit</span>
          </div>

           {/* Member 11 */}
           <div className="flex flex-col items-center">
            <img
              src="/images/image12.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Mohit</span>
          </div>

           {/* Member 11 */}
           <div className="flex flex-col items-center">
            <img
              src="/images/image13.jfif"
              alt="Shreyash"
              className="w-10 h-9 rounded-full border-2 border-[#1b2330]"
            />
            <span className="text-xs mt-1 text-gray-300">Mohit</span>
          </div>

          <span className="ml-2 text-sm text-gray-400">
            +12 more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
