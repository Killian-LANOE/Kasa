import React from 'react';
import Main_Vitrine from './Main_Vitrine';
import banner from '../assets/banner.png';

function Main() {
  return (
    <main className="w-[90vw] m-auto">
      {/* Banner */}
      <div className="relative mt-4 w-full h-28 bg-no-repeat rounded-xl">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={banner}
          alt="main banner"
        ></img>
        <p className="absolute top-6 ml-6 text-2xl opacity-100 z-10 text-white bold">
          Chez vous, <br /> partout et ailleurs
        </p>
        <div className="absolute top-0 flex h-full w-full bg-black opacity-30 rounded-xl"></div>
      </div>

      {/* Locations */}
      <section className="mt-6 min-h-screen">
        <Main_Vitrine />
      </section>
    </main>
  );
}

export default Main;
