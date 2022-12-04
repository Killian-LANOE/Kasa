import React from 'react';
import Main_Vitrine from './Main_Vitrine';
import {useState} from 'react';

function Main() {
  const [desktop, setDesktop] = useState(false);

  function isDesktop() {
    if (window.innerWidth >= 1024) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  }
  window.onresize = isDesktop;

  return (
    <main className="w-[87vw] m-auto">
      {/* Banner */}
      <div className="flex lg:justify-center relative mt-4 w-full h-28 lg:h-40 lg:mt-12">
        <img
          className="w-full h-full rounded-3xl object-cover"
          src={
            desktop ? 'src/assets/DesktopBanner.png' : 'src/assets/banner.png'
          }
          alt="main banner"
        ></img>
        <p className="absolute top-6 ml-6 text-2xl lg:text-4xl lg:top-14 opacity-100 z-10 text-white bold">
          {desktop ? (
            <>Chez vous, partout et ailleurs</>
          ) : (
            <>
              Chez vous, <br /> partout et ailleurs
            </>
          )}
        </p>
        <div className="absolute top-0 flex h-full w-full bg-black opacity-30 rounded-3xl lg:rounded-3xl"></div>
      </div>

      {/* Locations */}
      <section className="mt-6 rounded-3xl min-h-screen lg:bg-[#f7f7f7] ">
        <Main_Vitrine />
      </section>
    </main>
  );
}

export default Main;
