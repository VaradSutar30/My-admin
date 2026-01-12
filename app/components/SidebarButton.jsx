const SidebarButton = ({ icon, text, link }) => {
    return (
      <a
        href={link}
        className="flex items-center gap-3 hover:bg-gray-500 px-4 py-2 rounded-lg transition"
      >
        {icon}
        <span>{text}</span>
      </a>
  
      
    );
  };
  
  export default SidebarButton;