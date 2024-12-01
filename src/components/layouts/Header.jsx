import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 bg-transparent flex flex-col xl:flex-row xl:justify-between xl:items-center text-slate-300 py-6 px-3 sm:px-8 md:px-32 drop-shadow-md">
      {/* Logo */}
      <Link to="/" className="w-full xl:w-auto mb-3 xl:mb-0">
        <img
          src={logo}
          alt="Massacre-Mascarade-Logo"
          className="w-full hover:scale-105 transition-all"
        />
      </Link>

      {/* Burger button */}
      <button
        className="xl:hidden text-slate-300 focus:outline-none mb-5 self-start"
        onClick={toggleMenu}
      >
        <span className="text-2xl">{isMenuOpen ? "✖" : "☰"}</span>
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="absolute top-0 left-3 right-3 bg-[#4C171A] rounded-lg shadow-lg p-6 flex flex-col items-start gap-4 z-50 max-h-[90vh] overflow-y-auto"
        >
          <button
            className="self-end text-white text-2xl mb-2 focus:outline-none"
            onClick={toggleMenu}
          >
            ✖
          </button>
          <Link
            to="/products"
            className="text-white hover:bg-[#A75155] p-3 rounded-md font-black w-full text-left transition-all"
            onClick={toggleMenu}
          >
            ПРОДУКТЫ
          </Link>
          <Link
            to="/contacts"
            className="text-white hover:bg-[#A75155] p-3 rounded-md font-black w-full text-left transition-all"
            onClick={toggleMenu}
          >
            КОНТАКТЫ
          </Link>
        </div>
      )}

      {/* Desktop menu */}
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        <li>
          <Link
            to="/products"
            className="p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black"
          >
            ПРОДУКТЫ
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className="p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black"
          >
            КОНТАКТЫ
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
