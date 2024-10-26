import React from 'react';
import Header from '../components/layouts/Header';

const Products = () => {
  return (
    <>
      <Header />
      <div className="text-center text-slate-300">
        <h1 className="text-3xl">Products Page</h1>
        <p>Here you will find our products.</p>
      </div>
    </>
  );
}

export default Products;