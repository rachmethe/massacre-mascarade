import React from 'react';
import Header from '../components/layouts/Header';
import imageBG from '../assets/image-bg.jpg';
import ProductCard from '../components/product/ProductCard';
import mobileImg1 from '../assets/vert-green-mobile-outline.png';
import productBG from '../assets/product-bg.png';

const Leads = () => {
  return (
    <>
      <Header />
      {/* Фоновое изображение */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageBG})` }}
      ></div>

      {/* Контент страницы */}
      <div className="relative mt-10 mx-5 flex flex-col text-left">
        {/* Заголовок страницы */}
        <h2 className="text-2xl pl-10 sm:pl-10 md:pl-28 lg:pl-96 text-slate-300 mb-6">Поводки</h2>
        {/* div ниже я хочу сделать меньше, как? */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"> {/* Уменьшена ширина контейнера */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-transparent px-3 py-3 rounded-xl">
                <ProductCard 
                productImg={mobileImg1} 
                productBG={productBG} 
                title="КОРОТКИЙ ЗЕЛЁНЫЙ ПОВОДОК"
                description="Кожа ручной покраски, паракорд, вощёная нить" 
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default Leads;
