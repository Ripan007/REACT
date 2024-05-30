import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './ProductsPage';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <ProductsPage /> },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
