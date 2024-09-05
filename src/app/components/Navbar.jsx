import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Navbar = ({ toggleSideBar, isOpen }) => {
  return (
    <navbar>
      <header className="w-full bg-slate-400 flex items-center px-4 py-2">
        <button onClick={toggleSideBar} className="mr-5">
          {!isOpen ? <FaArrowCircleRight className="text-white" /> : <FaArrowCircleLeft className="text-white" />}
        </button>
        <h1 className="text-white font-semibold">Dashboard</h1>
      </header>
    </navbar>
  );
};

export default Navbar;
