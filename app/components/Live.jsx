"use client";
import React, { useRef, useEffect } from "react";

const Live = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className="bg-[#eff6ff] rounded-xl shadow-md 
      p-4 sm:p-5 md:p-6"
    >
      <h2
        className="text-base sm:text-lg md:text-xl 
        font-semibold text-[#1e3a8a] mb-3 sm:mb-4 
        flex items-center gap-2"
      >
        <span className="animate-pulse text-red-500 text-lg sm:text-xl">●</span>
        Live Stream
      </h2>

      <div
        className="relative w-full aspect-video 
        rounded-lg overflow-hidden 
        border border-gray-700 shadow-xl"
      >
        <video
          ref={videoRef}
          src="/videos/video4.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      <h2
        className="text-base sm:text-lg md:text-xl 
        font-semibold text-[#1e3a8a] mb-3 sm:mb-4 
        flex items-center gap-2"
      >
        <span className="animate-pulse text-red-500 text-lg sm:text-xl">●</span>
        Live Stream
      </h2>

      <div
        className="relative w-full aspect-video 
        rounded-lg overflow-hidden 
        border border-gray-700 shadow-xl"
      >
        <video
          ref={videoRef}
          src="/videos/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      <h2
        className="text-base sm:text-lg md:text-xl 
        font-semibold text-[#1e3a8a] mb-3 sm:mb-4 
        flex items-center gap-2"
      >
        <span className="animate-pulse text-red-500 text-lg sm:text-xl">●</span>
        Live Stream
      </h2>

      <div
        className="relative w-full aspect-video 
        rounded-lg overflow-hidden 
        border border-gray-700 shadow-xl"
      >
        <video
          ref={videoRef}
          src="/videos/video3.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      <h2
        className="text-base sm:text-lg md:text-xl 
        font-semibold text-[#1e3a8a] mb-3 sm:mb-4 
        flex items-center gap-2"
      >
        <span className="animate-pulse text-red-500 text-lg sm:text-xl">●</span>
        Live Stream
      </h2>

      <div
        className="relative w-full aspect-video 
        rounded-lg overflow-hidden 
        border border-gray-700 shadow-xl"
      >
        <video
          ref={videoRef}
          src="/videos/flat.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>


    </div>
  );
};

export default Live;
