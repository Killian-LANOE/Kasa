import React from 'react';
import logo from '../assets/Logo.svg';

function Header() {
  return (
    <>
      <header className="flex justify-between mt-6 mx-auto w-[87vw]">
        <img className="h-12 w-auto" src={logo} alt="Logo Kasa"></img>
        <nav className="flex">
          <ul className="flex items-center text-xs lg:text-base text-[#FF6060]">
            <li className="mr-6 hover:underline">ACCUEIL</li>
            <li className="hover:underline">À PROPOS</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
