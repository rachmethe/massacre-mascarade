import React from 'react';
import Header from '../components/layouts/Header';
import imageBG from '../assets/image-bg.jpg';

const Contacts = () => {
  return (
    <>
      <Header />
      {/* Фоновое изображение */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageBG})` }}
      ></div>

      {/* Контент страницы */}
      <div className="relative flex items-center justify-center">
        {/* Карточка с категориями */}
        <div className="relative w-full max-w-4xl aspect-video rounded-xl border-4 border-red-800 overflow-hidden">
          

          {/* Секция с категориями */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-2xl text-slate-300 mb-4">Контакты</h2>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
