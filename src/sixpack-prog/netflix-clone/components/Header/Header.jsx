import React from 'react';
import netflix from '../../../../../src/assets/netflix.png';
import '../Home/Home.scss';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

function Header() {
  return (
    <nav className="header">
      <img src={netflix} alt="" />
      <div>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/tvshows">Movies</Link>
        <Link to="/tvshows">Recently Added</Link>
        <Link to="/tvshows">tvshows</Link>
      </div>
      <CiSearch />
    </nav>
  );
}

export default Header;
