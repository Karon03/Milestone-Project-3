import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div>
      <button onClick={() => window.location.href = '/'} style={{ position: 'absolute', top: '10px', left: '10px', height: '30px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1000' }}>
        <p style={{ color: 'white', fontSize: '10px' }}>
        Home
        </p>
      </button>
      {children}
    </div>
  );
};

export default Layout;