import React from 'react';
import appartements from '../../../backend/Appartement.json';

function Main_Vitrine() {
  console.log(appartements);
  return (
    <>
      {appartements.map((appartement) => {
        return (
          <div className="relative w-full h-64 mb-5 rounded-xl">
            <a href="/">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={`${appartement.cover}`}
              ></img>
              <div className="h-full w-full bg-black rounded-xl opacity-40 absolute top-0"></div>
              <p className="text-white w-72 absolute bottom-4 left-2 flex-wrap">
                {appartement.title}
              </p>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default Main_Vitrine;
