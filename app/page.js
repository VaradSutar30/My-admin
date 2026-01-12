import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";

export default function Page() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="bg-gray flex overflow-hidden shadow-2xl">

        {/* Sidebar */}
        <Sidebar />  

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col">

          {/* Navbar */}
          <div className="px-6 mt-2">
            <Navbar />
          </div>

           {/* Top Header */}
           <main className=" min-h-screen p-10 px-6 pt-5">
            <TopHeader />
          </main>

          {/* Page Content */}
          <div className="p-6 flex-1 overflow-y-auto">
            {/* your rest content here */}
          </div>

          {/*RightSidebar */}
          <div className="p-6 flex-1">
            <RightSidebar/>
          </div>

        </div>
      </div>
    </div>
  );
}
