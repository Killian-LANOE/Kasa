import React from 'react';
import LogoWhite from '../assets/LogoWhite.svg';

function Footer() {
  return (
    <footer className="flex items-center w-screen bg-black h-52">
      <div className="flex flex-col items-center h-content w-full ">
        <img className="w-32 mb-8 fill-white" src={LogoWhite}></img>
        <p className="text-white">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
