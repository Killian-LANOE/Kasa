import React from 'react';
import appartements from '../../../backend/Appartement.json';

function Main_Vitrine() {
  return (
    <div className="lg:p-12 lg:grid lg:grid-cols-3 lg:justify-items-center">
      {appartements.map((appartement) => {
        return (
          <div
            key={appartement.id}
            className="relative w-full h-64 mb-5 rounded-xl lg:w-[90%] lg:h-60 lg:mb-12"
          >
            <a href="/">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={`${appartement.cover}`}
              ></img>
              <div className="h-full w-full bg-gradient-to-b from-transparent to-black rounded-xl opacity-40 absolute top-0"></div>
              <p className="text-white w-[90%] lg:w-[80%] absolute bottom-4 left-2 flex-wrap">
                {appartement.title}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Main_Vitrine;
