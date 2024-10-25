const ProductCard = ({ productImg, productBG, title, description, className }) => {
    return (
      <div className={`${className} relative`}>
        <a href="javascript:;" className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#34090B] transition-all duration-500">
          <div className='relative'>
            {/* Полупрозрачный фоновый контейнер */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#34090B] opacity-70 rounded-2xl z-0"
              style={{ backgroundImage: `url(${productBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
  
            {/* Основное изображение поверх фона */}
            <img src={productImg} alt="product image" className="relative w-full aspect-auto rounded-2xl border-8 border-[#4C171A] object-cover z-10" />
          </div>
  
          <div className="mt-2 p-2.5 bg-transparent rounded-2xl border-8 border-[#4C171A] relative overflow-hidden">
            <div className="absolute inset-0 opacity-70 z-0">
              <img src={productBG} alt="background" className="w-full h-full object-cover" />
            </div>
  
            <div className="relative z-10">
              <h6 className="font-semibold text-xl leading-8 text-slate-300 hover:text-slate-100">
                {title}
              </h6>
  
              <div className="flex flex-col gap-4">
                <p className="font-normal text-sm leading-6 text-slate-300">
                  {description}
                </p>
  
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
    );
  };
  
  export default ProductCard;
  