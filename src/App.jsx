import logo from './assets/logo.svg';
import './App.css'

function App() {

  return (
    <>
    <body className='bg-cover bg-center bg-[url("https://raw.githubusercontent.com/rachmethe/massacre-mascarade/refs/heads/main/public/images/bg-img-sm.jpg")]'>
    
        <header className='bg-transparent flex justify-between items-center text-[#A7686B] py-6 px-8 md:px-32 drop-shadow-md'>
            <a href='#' className='w-full xl:mr-44'>
            <img src={logo} alt='Massacre-Mascarade-Logo' className='w-full hover:scale-105 transition-all'/>
            </a>

            <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
            <li className='p-3 hover:bg-[#4C171A] hover:text-white rounded-md transition-all cursor-pointer font-black'>ПРОДУКТЫ</li>
            <li className='p-3 hover:bg-[#4C171A] hover:text-white rounded-md transition-all cursor-pointer font-black'>КОНТАКТЫ</li>
            </ul>
        </header>
        <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* <h2 className="font-bold text-4xl text-[#A7686B] mb-8 max-lg:text-center">
                ПРОДУКТЫ
            </h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 bg-transparent px-5 py-5 rounded-2xl">

                <div>
                    <a href="javascript:;"
                        className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#34090B] transition-all duration-500">
                        <div >
                            <img src="https://github.com/rachmethe/massacre-mascarade/blob/main/public/images/vert-green.jpg?raw=true" alt="face cream image"
                                className="w-full aspect-auto rounded-2xl object-cover border-8 border-[#4C171A]" />
                        </div>
                        <div className="mt-2 p-2.5 bg-[#34090B] bg-opacity-50 rounded-2xl border-8 border-[#4C171A]">
                            <div className="flex items-center justify-between bg-transparent">
                                <h6
                                    className="font-semibold text-xl leading-8 text-[#A76751] group-hover:text-[#A77968] pr-1.5">
                                    КОРОТКИЙ ЗЕЛЁНЫЙ ПОВОДОК
                                </h6>                            
                                <button className="group relative inline-block items-center justify-center overflow-hidden rounded-lg px-8 py-5 font-black hover:text-slate-100 shadow-2xl">
                                    <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-[#A75155] blur-md transition-all duration-700"></span>
                                    <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                                        <span className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#441525] blur-md"></span>
                                        <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#A34F6B] blur-md"></span>
                                        <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#3B1B1D] blur-md"></span>
                                        <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-red-900 blur-md"></span>
                                        <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-[#2F0815] blur-md"></span>
                                        <span className="absolute bottom-0 right-0 -mr-20 h-24 w-24 rounded-full bg-[#A7686B] blur-md"></span>
                                    </span>
                                    <span className="relative text-slate-300 hover:text-slate-100"><h6 className='font-semibold text-xl leading-8'>ЗАКАЗАТЬ</h6></span>
                                </button>
                                {/* <h6 className="font-semibold text-xl leading-8 text-[#34090B] bg-[#A77968] border-4 border-[#A76751] hover:bg-[#4C171A] hover:text-slate-200 hover:border-[#A75155] py-2 px-5">ЗАКАЗАТЬ</h6> */}
                            </div>
                            <p className="mt-2 font-normal text-sm leading-6 text-[#A76751]">Кожа ручной покраски, паракорд, вощёная нить</p>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="javascript:;"
                        className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#34090B] transition-all duration-500">
                        <div className="">
                            <img src="https://github.com/rachmethe/massacre-mascarade/blob/main/public/images/vert-red-fist.jpg?raw=true" alt="face cream image"
                                className="w-full aspect-auto rounded-2xl object-cover border-8 border-[#4C171A]" />
                        </div>
                        <div className="mt-2 p-2.5 bg-[#34090B] bg-opacity-50 rounded-2xl border-8 border-[#4C171A]">
                            <div className="flex items-center justify-between bg-transparent">
                                <h6
                                    className="font-semibold text-xl leading-8 text-[#A76751] group-hover:text-[#A77968] hover:underline">
                                    КРАСНЫЙ БРЕЛОК</h6>                                
                                <button className="group relative inline-block items-center justify-center overflow-hidden rounded-lg px-8 py-5 font-black hover:text-slate-100 shadow-2xl">
                                    <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-[#A75155] blur-md transition-all duration-700"></span>
                                    <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                                    <span className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#441525] blur-md"></span>
                                    <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#A34F6B] blur-md"></span>
                                    <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#3B1B1D] blur-md"></span>
                                    <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-red-900 blur-md"></span>
                                    <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-[#2F0815] blur-md"></span>
                                    <span className="absolute bottom-0 right-0 -mr-20 h-24 w-24 rounded-full bg-[#A7686B] blur-md"></span>
                                    </span>
                                    <span className="relative text-slate-300 hover:text-slate-100"><h6 className='font-semibold text-xl leading-8'>ЗАКАЗАТЬ</h6></span>
                                </button>
                                {/* <h6 className="font-semibold text-xl leading-8 text-[#34090B] bg-[#A77968] border-4 border-[#A76751] hover:bg-[#4C171A] hover:text-slate-200 hover:border-[#A75155] py-2 px-5">ЗАКАЗАТЬ</h6> */}
                            </div>
                            <p className="mt-2 font-normal text-sm leading-6 text-[#A76751]">Кожа ручной покраски, паракорд, стальной шар, вощёная нить</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
        </section>
    </body>
    </>
  )
}

export default App
