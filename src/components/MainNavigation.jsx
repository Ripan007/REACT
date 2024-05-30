import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">home </Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
