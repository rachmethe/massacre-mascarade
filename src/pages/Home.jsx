import React, { useState, useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import mobileImg1 from '../assets/vert-green-mobile-outline.png';
import mobileImg2 from '../assets/vert-red-fist-mobile-outline.png';
import productBG from '../assets/product-bg.png';
import imageBG from '../assets/image-bg.jpg'; // Статическое изображение для мобильных
import Header from '../components/layouts/Header';
import Spline from '@splinetool/react-spline';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Проверяем размер экрана
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640); // Ширина >= 640px (sm breakpoint)
    };

    handleResize(); // Установка начального значения
    window.addEventListener('resize', handleResize); // Слушатель для изменения размеров

    return () => window.removeEventListener('resize', handleResize); // Очистка слушателя
  }, []);

  return (
    <>
      <Header />

      {/* Фон для десктопов */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 bg-product">
          <Spline
            className="w-full h-full object-cover min-h-screen"
            scene="https://prod.spline.design/eW9BExXvojrw8NFW/scene.splinecode"
          />
        </div>
      )}

      {/* Фон для мобильных */}
      {!isDesktop && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageBG})` }}
        ></div>
      )}

      <section className="relative z-10 bg-transparent flex justify-center items-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-28 bg-transparent px-5 py-5 rounded-2xl">
            <ProductCard
              productImg={mobileImg1}
              productBG={productBG}
              title="КОРОТКИЙ ЗЕЛЁНЫЙ ПОВОДОК"
              description="Кожа ручной покраски, паракорд, вощёная нить"
            />
            <ProductCard
              productImg={mobileImg2}
              productBG={productBG}
              title="КРАСНЫЙ БРЕЛОК"
              description="Кожа ручной покраски, паракорд, стальной шар, вощёная нить"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
