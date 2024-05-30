import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
