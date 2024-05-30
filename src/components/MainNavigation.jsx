import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'classes.active' : undefined
              }
              end
              to="/"
            >
              home{' '}
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
