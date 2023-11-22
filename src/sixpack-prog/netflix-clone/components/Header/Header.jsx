import React from 'react';
import netflix from '../../../../../src/assets/netflix.png';
import '../Home/Home.scss';

function Header() {
  return (
    <nav className="header">
      <img src={netflix} alt="" />
    </nav>
  );
}

export default Header;
