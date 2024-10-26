import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='relative z-10 bg-transparent flex justify-between items-center text-slate-300 py-6 px-8 md:px-32 drop-shadow-md'>
      <Link to='/' className='w-full xl:mr-44'>
        <img src={logo} alt='Massacre-Mascarade-Logo' className='w-full hover:scale-105 transition-all'/>
      </Link>

      <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
        <li>
          <Link to="/products" className='p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black'>
            ПРОДУКТЫ
          </Link>
        </li>
        <li>
          <Link to="/contacts" className='p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black'>
            КОНТАКТЫ
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
