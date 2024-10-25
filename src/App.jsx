import mobileImg1 from './assets/vert-green-mobile-outline.png';
import mobileImg2 from './assets/vert-red-fist-mobile-outline.png';
import productBG from './assets/product-bg.png';
import './App.css';
import Spline from '@splinetool/react-spline';
import Header from './components/layouts/Header';
import ProductCard from './components/product/ProductCard';

function App() {
  return (
    <>
      <div className='bg-transparent relative min-h-screen w-screen overflow-hidden'>
        <div className='absolute inset-0 z-0 bg-product'>
          <Spline className='w-full h-full object-cover min-h-screen' scene="https://prod.spline.design/eW9BExXvojrw8NFW/scene.splinecode" />
        </div>
        
        <Header />

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
                className='pb-20 md:pb-15 lg:pb-10 xl:pb-5 2xl:pb-0'
                productImg={mobileImg2} 
                productBG={productBG} 
                title="КРАСНЫЙ БРЕЛОК"
                description="Кожа ручной покраски, паракорд, стальной шар, вощёная нить" 
            />

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App;
