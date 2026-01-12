import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-56 min-h-screen bg-gray-900 shadow-lg p-4 flex flex-col text-white">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/images/villa.jfif"
          alt="logo"
          width={40}
          height={40}
          className="rounded object-cover"
          priority
        />
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 flex-1 rounded">

        <button className="px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium bg-gray-800">
          Home
        </button>

        <button className="px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium">
          Rooms
        </button>

        <button className="px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium">
          Security
        </button>

        <button className="px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium">
          CCTV
        </button>

      </nav>

      {/* Bottom */}
      <div className="flex flex-col gap-2 pt-6 border-t border-gray-700">

        <button className="px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium">
          Settings
        </button>

        <button className="px-4 py-2 rounded-lg text-left hover:bg-gray-800 font-medium">
          Help
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
