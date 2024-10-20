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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-[#34090B] px-5 py-5 rounded-2xl">
                <a href="javascript:;"
                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#34090B] transition-all duration-500">
                    <div >
                        <img src="https://github.com/rachmethe/massacre-mascarade/blob/main/public/images/vert-green.jpg?raw=true" alt="face cream image"
                            className="w-full aspect-auto rounded-2xl object-cover" />
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between bg-[#34090B]">
                            <h6
                                className="font-semibold text-xl leading-8 text-[#A76751] group-hover:text-[#A77968] hover:underline">
                                КОРОТКИЙ ЗЕЛЁНЫЙ ПОВОДОК</h6>
                            <h6 className="font-semibold text-xl leading-8 text-[#34090B] bg-[#A77968] border-4 border-[#A76751] hover:bg-[#4C171A] hover:text-slate-200 hover:border-[#A75155] py-2 px-5">ЗАКАЗАТЬ</h6>
                        </div>
                        <p className="mt-2 font-normal text-sm leading-6 text-[#A76751]">Кожа ручной покраски, паракорд, вощёная нить</p>
                    </div>
                </a>

                <a href="javascript:;"
                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#34090B] transition-all duration-500">
                    <div className="">
                        <img src="https://github.com/rachmethe/massacre-mascarade/blob/main/public/images/vert-red-fist.jpg?raw=true" alt="face cream image"
                            className="w-full aspect-auto rounded-2xl object-cover" />
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between">
                            <h6
                                className="font-semibold text-xl leading-8 text-[#A76751] group-hover:text-[#A77968] hover:underline">
                                КРАСНЫЙ БРЕЛОК</h6>
                            <h6 className="font-semibold text-xl leading-8 text-[#34090B] bg-[#A77968] border-4 border-[#A76751] hover:bg-[#4C171A] hover:text-slate-200 hover:border-[#A75155] py-2 px-5">ЗАКАЗАТЬ</h6>
                        </div>
                        <p className="mt-2 font-normal text-sm leading-6 text-[#A76751]">Кожа ручной покраски, паракорд, стальной шар, вощёная нить</p>
                    </div>
                </a>               
            </div>
        </div>
        </section>
    </body>
    </>
  )
}

export default App
