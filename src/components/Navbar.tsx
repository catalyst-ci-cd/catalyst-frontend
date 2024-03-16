import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(showMenu => !showMenu);
  };

  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="py-8">
      <div className="container flex justify-between items-center">
        <div>
          <img src={logo} alt="Catalyst" className="w-32" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-tertiary text-lg">
            <li
              onClick={() => scrollToView('header')}
              className="cursor-pointer hover:text-white transition-all"
            >
              Home
            </li>
            <li
              onClick={() => scrollToView('about')}
              className="cursor-pointer hover:text-white transition-all"
            >
              About
            </li>
            <li
              onClick={() => scrollToView('features')}
              className="cursor-pointer hover:text-white transition-all"
            >
              Features
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="primary-btn">
            <Link to="/login">Login</Link>
          </button>
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
            <ul className="flex flex-col items-center gap-4 text-tertiary text-lg">
              <li
                onClick={() => {
                  scrollToView('header');
                  handleToggleMenu();
                }}
                className="cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => {
                  scrollToView('about');
                  handleToggleMenu();
                }}
                className="cursor-pointer"
              >
                About
              </li>
              <li
                onClick={() => {
                  scrollToView('features');
                  handleToggleMenu();
                }}
                className="cursor-pointer"
              >
                Features
              </li>
            </ul>
            <button className="primary-btn mt-4">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
