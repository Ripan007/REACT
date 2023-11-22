import React from 'react';
import './AppNetflix.scss';
import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

function AppNetflix() {
  return (
    <createBrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </createBrowserRouter>
  );
}

export default AppNetflix;
