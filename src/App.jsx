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
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-4xl text-black mb-8 max-lg:text-center">
                ПРОДУКТЫ
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <a href="javascript:;"
                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                    <div className="">
                        <img src="https://github.com/rachmethe/massacre-mascarade/blob/main/public/images/vert-green.jpg?raw=true" alt="face cream image"
                            className="w-full aspect-auto rounded-2xl object-cover" />
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between">
                            <h6
                                className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-red-900 hover:underline">
                                КОРОТКИЙ ЗЕЛЁНЫЙ ПОВОДОК</h6>
                            <h6 className="font-semibold text-xl leading-8 text-red-900">&#8381;10000</h6>
                        </div>
                        <p className="mt-2 font-normal text-sm leading-6 text-gray-500">Кожа ручной покраски, паракорд, вощёная нить</p>
                    </div>
                </a>

                <a href="javascript:;"
                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                    <div className="">
                        <img src="https://github.com/rachmethe/massacre-mascarade/blob/main/public/images/vert-red-fist.jpg?raw=true" alt="face cream image"
                            className="w-full aspect-auto rounded-2xl object-cover" />
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between">
                            <h6
                                className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-red-900 hover:underline">
                                КРАСНЫЙ БРЕЛОК</h6>
                            <h6 className="font-semibold text-xl leading-8 text-red-900">&#8381;5000</h6>
                        </div>
                        <p className="mt-2 font-normal text-sm leading-6 text-gray-500">Кожа ручной покраски, паракорд, стальной шар, вощёная нить</p>
                    </div>
                </a>               
            </div>
        </div>
    </section>
                                             
    </>
  )
}

export default App
