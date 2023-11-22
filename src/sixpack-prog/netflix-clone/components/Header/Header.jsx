import React from 'react';
import { netflix } from '../../../../assets/netflix-logo.png';

function Header() {
  return (
    <nav className="header">
      <img src={netflix} alt="" />
    </nav>
  );
}

export default Header;
