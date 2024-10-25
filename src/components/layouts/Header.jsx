import React from 'react';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='relative z-10 bg-transparent flex justify-between items-center text-slate-300 py-6 px-8 md:px-32 drop-shadow-md'>
      <a href='#' className='w-full xl:mr-44'>
        <img src={logo} alt='Massacre-Mascarade-Logo' className='w-full hover:scale-105 transition-all' />
      </a>

      <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
        <li className='p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black'>
          ПРОДУКТЫ
        </li>
        <li className='p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black'>
          КОНТАКТЫ
        </li>
      </ul>
    </header>
  );
};

export default Header;
