import React from 'react';
import RevampBanner from './RevampBanner';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      <RevampBanner />
      <Navbar />
    </header>
  );
};

export default Header;