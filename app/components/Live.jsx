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
    <div className="bg-[#1b2330] rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
        <span className="animate-pulse text-red-500">●</span> Live Stream
      </h2>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-700">
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
