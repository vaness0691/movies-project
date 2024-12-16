import React from 'react';
import logo from '../../assets/logo.svg';

function Header() {
  return (
      <header className="flex justify-center h-12 bg-darkBlue">
        <div className='flex align-baseline w-full px-10 max-w-[1440px]'>
          <img src={logo} alt="The Movie Database (TMDB)" width="154" height="20" />
        </div>
      </header>
  );
};

export default Header;