import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <nav className="py-8">
      <div className="container flex justify-between items-center">
        <div className="text-white uppercase text-2xl font-bold">Catalyst</div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 text-ternary text-lg">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="primary-btn">Get Started</button>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggleMenu} className="text-white text-3xl ">
            <AiOutlineMenu />
          </button>
        </div>
        {showMenu && (
          <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center md:hidden">
            <button
              onClick={handleToggleMenu}
              className="text-white text-3xl absolute top-8 right-8"
            >
              <AiOutlineClose />
            </button>
            <ul className="flex flex-col items-center gap-4 text-ternary text-lg">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <button className="primary-btn mt-4">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
