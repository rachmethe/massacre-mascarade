import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layouts/Header';
import imageBG from '../assets/image-bg.jpg';
import categoriesBG from '../assets/categoriesBG.mp4';
import PopUpSoon from '../components/layouts/PopUpSoon';

const Products = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === 'Протупеи' || category === 'Ошейники') {
      setIsPopUpVisible(true);
    } else if (category === 'Поводки') {
      navigate('/leads');
    } else if (category === 'Брелки') {
      navigate('/keychains');
    }
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  return (
    <>
      <Header />
      {/* Фоновое изображение */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageBG})` }}
      ></div>

      {/* Контент страницы */}
      <div className="relative mt-32 mx-5 flex flex-col items-center justify-center">
        {/* Заголовок страницы */}
        <h2 className="text-2xl text-slate-300 mb-6">Категории</h2>

        {/* Карточка с категориями */}
        <div
          className="
            relative 
            w-full 
            border-4 border-[#4C171A] overflow-hidden 
            rounded-xl 
            max-w-md md:max-w-lg lg:max-w-6xl 
            flex flex-col md:flex-row lg:flex-row
            md:items-center lg:items-start
          "
        >
          {/* Фон видео */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={categoriesBG}
            autoPlay
            loop
            muted
          ></video>

          {/* Контент карточки */}
          <div className="relative z-10 flex flex-col items-stretch justify-center w-full h-full bg-black bg-opacity-50 p-6">
            <ul className="grid grid-cols-1 gap-4 text-center text-slate-300">
              {['Поводки', 'Брелки', 'Протупеи', 'Ошейники'].map((category) => (
                <li
                  key={category}
                  className="p-4 rounded-md border border-[#4C171A] hover:underline cursor-pointer transition-all"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* PopUp */}
      <PopUpSoon isVisible={isPopUpVisible} onClose={closePopUp} />
    </>
  );
};

export default Products;
