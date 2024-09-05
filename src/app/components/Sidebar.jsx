import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ isOpen }) => {
  const listItems = [
    { name: "Home", icon: IoMdHome },
    { name: "Profile", icon: CgProfile },
  ];

  return (
    <aside className="bg-red-400 h-screen">
      <h1 className="text-center pt-2">Logo</h1>

      <ul>
        {listItems.map((item, index) => (
          <li key={index} className="flex items-center ml-4">
            <item.icon className="w-6 h-6 mt-4" /> <p className={`${isOpen ? "ml-2 mt-4" : "hidden"}`}>{item.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
