import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/Product';

const router = createBrowserRouter([)

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
