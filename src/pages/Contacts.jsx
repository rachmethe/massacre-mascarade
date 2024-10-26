import React from 'react';
import Header from '../components/layouts/Header';

const Contacts = () => {
  return (
    <>
      <Header />
      <div className="text-center text-slate-300">
        <h1 className="text-3xl">Contacts Page</h1>
        <p>Feel free to reach out to us.</p>
      </div>
    </>
  );
}

export default Contacts;