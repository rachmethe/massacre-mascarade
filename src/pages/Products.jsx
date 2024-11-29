import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import Header from '../components/layouts/Header';
import imageBG from '../assets/image-bg.jpg';
import categoriesBG from '../assets/categoriesBG.mp4';
import PopUpSoon from '../components/layouts/PopUpSoon';

const Products = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const navigate = useNavigate(); // Используем useNavigate

  const handleCategoryClick = (category) => {
    if (category === 'Протупеи' || category === 'Ошейники') {
      setIsPopUpVisible(true);
    } else if (category === 'Поводки') {
      navigate('/leads'); // Переход на страницу Поводков
    } else if (category === 'Брелки') {
      navigate('/keychains'); // Переход на страницу Брелков
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
        <div className="relative w-full max-w-4xl aspect-video rounded-xl border-4 border-red-800 overflow-hidden">
          {/* Фон видео */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={categoriesBG}
            autoPlay
            loop
            muted
          ></video>

          {/* Секция с категориями */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 text-center text-slate-300">
              {['Поводки', 'Брелки', 'Протупеи', 'Ошейники'].map((category) => (
                <li
                  key={category}
                  className="p-4 rounded-md border border-red-800 hover:underline cursor-pointer transition-all"
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
