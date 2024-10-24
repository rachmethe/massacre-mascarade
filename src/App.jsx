import logo from './assets/logo.svg';
import mobileImg1 from './assets/vert-green-mobile-outline.png';
import mobileImg2 from './assets/vert-red-fist-mobile-outline.png';
import productBG from './assets/product-bg.png';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {

  return (
    <>    
    <div className='bg-transparent relative min-h-screen w-screen overflow-hidden'>
        <div className='absolute inset-0 z-0 bg-[#34090B]'>
            <Spline className='w-full h-full object-cover min-h-screen' scene="https://prod.spline.design/eW9BExXvojrw8NFW/scene.splinecode" />
        </div>
        
    
        <header className='relative z-10 bg-transparent flex justify-between items-center text-slate-300 py-6 px-8 md:px-32 drop-shadow-md'>
            <a href='#' className='w-full xl:mr-44'>
            <img src={logo} alt='Massacre-Mascarade-Logo' className='w-full hover:scale-105 transition-all'/>
            </a>

            <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
            <li className='p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black'>ПРОДУКТЫ</li>
            <li className='p-3 bg-[#4C171A] hover:bg-[#A75155] hover:text-white rounded-md transition-all cursor-pointer font-black'>КОНТАКТЫ</li>
            </ul>
        </header>

        
        
        

        <section className="relative z-10 bg-transparent flex justify-center items-center">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-28 bg-transparent px-5 py-5 rounded-2xl">

                    <div>
                        <a href="javascript:;"
                            className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#34090B] transition-all duration-500">
                            <div className='relative'>
                                {/* Полупрозрачный фоновый контейнер */}
                                <div 
                                    className="absolute inset-0 w-full h-full bg-[#34090B] opacity-70 rounded-2xl z-0"
                                    style={{ backgroundImage: `url(${productBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                ></div>
                                
                                {/* Основное изображение поверх фона */}
                                <img src={mobileImg1} alt="face cream image" className="relative w-full aspect-auto rounded-2xl border-8 border-[#4C171A] object-cover z-10" />
                            </div>
                            
                            <div className="mt-2 p-2.5 bg-transparent rounded-2xl border-8 border-[#4C171A] relative overflow-hidden">
                                <div className="absolute inset-0 opacity-70 z-0">
                                    <img src={productBG} alt="background" className="w-full h-full object-cover" />
                                </div>
                                
                                <div className="relative z-10">
                                    <h6 className="font-semibold text-xl leading-8 text-slate-300 hover:text-slate-100">
                                        КОРОТКИЙ ЗЕЛЁНЫЙ ПОВОДОК
                                    </h6>

                                    <div className="flex flex-col gap-4">
                                        <p className="font-normal text-sm leading-6 text-slate-300">Кожа ручной покраски, паракорд, вощёная нить</p>

                                        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-black text-sm hover:text-slate-100 shadow-2xl">
                                            <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-[#A75155] blur-md transition-all duration-700"></span>
                                            <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                                                <span className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#441525] blur-md"></span>
                                                <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#A34F6B] blur-md"></span>
                                            </span>
                                            <span className="relative text-slate-300 hover:text-slate-100">
                                                <h6 className='font-semibold'>ЗАКАЗАТЬ</h6>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>



                    <div className='pb-20 md:pb-15 lg:pb-10 xl:pb-5 2xl:pb-0'>
                        <a href="javascript:;" className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#34090B] transition-all duration-500">
                            <div className='relative'>
                                {/* Полупрозрачный фоновый контейнер */}
                                <div 
                                    className="absolute inset-0 w-full h-full bg-[#34090B] opacity-70 rounded-2xl z-0"
                                    style={{ backgroundImage: `url(${productBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                ></div>

                                {/* Основное изображение поверх фона */}
                                <img src={mobileImg2} alt="face cream image" className="relative w-full aspect-auto rounded-2xl border-8 border-[#4C171A] object-cover z-10" />
                            </div>

                            <div className="mt-2 p-2.5 bg-transparent rounded-2xl border-8 border-[#4C171A] relative overflow-hidden">
                                <div className="absolute inset-0 opacity-70 z-0">
                                    <img src={productBG} alt="background" className="w-full h-full object-cover" />
                                </div>

                                <div className="relative z-10">
                                    <h6 className="font-semibold text-xl leading-8 text-slate-300 hover:text-slate-100">
                                        КРАСНЫЙ БРЕЛОК
                                    </h6>

                                    <div className="flex flex-col gap-4">
                                        <p className="font-normal text-sm leading-6 text-slate-300">Кожа ручной покраски, паракорд, стальной шар, вощёная нить</p>

                                        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-black text-sm hover:text-slate-100 shadow-2xl">
                                            <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-[#A75155] blur-md transition-all duration-700"></span>
                                            <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                                                <span className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#441525] blur-md"></span>
                                                <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#A34F6B] blur-md"></span>
                                            </span>
                                            <span className="relative text-slate-300 hover:text-slate-100">
                                                <h6 className='font-semibold'>ЗАКАЗАТЬ</h6>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        
    </div>
    </>
  )
}

export default App
