"use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import Hero from "./components/Hero";
import Live from "./components/Live";
import RightSidebar from "./components/RightSidebar";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a]">
      <div className="flex h-full w-full">

        {/* Left Sidebar / Bottom Bar on Mobile */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 overflow-hidden">

          {/* Navbar */}
          <div className="px-4 sm:px-6 pt-4">
            <Navbar />
          </div>

          {/* Scrollable Content */}
          <div
            className="
            flex-1 overflow-y-auto 
            px-4 sm:px-6 
            pb-24 md:pb-6
            "
          >
            <div className="mt-4 sm:mt-6">
              <TopHeader />
            </div>

            <div className="mt-4 sm:mt-6">
              <Hero />
            </div>

            <div className="mt-4 sm:mt-6">
              <Live />
            </div>

            <div className="mt-6 text-white">
              {/* Your remaining dashboard widgets here */}
            </div>
          </div>
        </div>

        {/* Right Sidebar (Hidden on Mobile) */}
        <div className="hidden lg:block pr-4 pt-4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
