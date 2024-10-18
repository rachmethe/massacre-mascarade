import logo from './assets/logo.svg';
import './App.css'

function App() {

  return (
    <>
      <header className='flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md'>
        <a href='#'>
          <img src={logo} alt='Massacre-Mascarade-Logo' className='w-52 hover:scale-105 transition-all'/>
        </a>

        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <li className='p-3 hover:bg-red-800 hover:text-white rounded-md transition-all cursor-pointer font-black'>ПРОДУКТЫ</li>
          <li className='p-3 hover:bg-red-800 hover:text-white rounded-md transition-all cursor-pointer font-black'>КОНТАКТЫ</li>
        </ul>
      </header>
      <h1 className="text-3xl font-black underline">
        Hello world!
      </h1>    
    </>
  )
}

export default App
