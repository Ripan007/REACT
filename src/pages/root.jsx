import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function root() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}
