// Layout.js
import React from 'react';
import ThreeScene from './ThreeScene';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <ThreeScene/>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
