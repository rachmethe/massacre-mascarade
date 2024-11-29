import React from 'react';
import Header from '../components/layouts/Header';
import imageBG from '../assets/image-bg.jpg';
import ProductCard from '../components/product/ProductCard';
import mobileImg2 from '../assets/vert-red-fist-mobile-outline.png';
import productBG from '../assets/product-bg.png';

const Keychains = () => {
  return (
    <>
      <Header />
      {/* Фоновое изображение */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageBG})` }}
      ></div>

      {/* Контент страницы */}
      <div className="relative mt-10 mx-5 flex flex-col items-center justify-center">
        {/* Заголовок страницы */}
        <h2 className="text-2xl text-slate-300 mb-6">Брелки</h2>
        {/* div ниже я хочу сделать меньше, как? */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"> {/* Уменьшена ширина контейнера */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-transparent px-3 py-3 rounded-xl">
                <ProductCard 
                    productImg={mobileImg2} 
                    productBG={productBG} 
                    title="КРАСНЫЙ БРЕЛОК"
                    description="Кожа ручной покраски, паракорд, стальной шар, вощёная нить" 
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default Keychains;
