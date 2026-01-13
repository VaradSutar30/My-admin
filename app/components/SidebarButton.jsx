const SidebarButton = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      className="
        flex flex-col md:flex-row items-center justify-center md:justify-start
        gap-1 md:gap-3
        hover:bg-gray-800
        px-2 md:px-4 py-1.5 md:py-2
        rounded-lg transition
        text-xs md:text-sm font-medium
        w-full md:w-auto
      "
    >
      <span className="text-lg md:text-base">{icon}</span>
      <span className="hidden md:inline">{text}</span>
    </a>
  );
};

export default SidebarButton;
