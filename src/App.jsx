import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages routes
import Home from './pages/Home'
import ProductsPage from './pages/Product'
import RootLayout from './pages/root'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <ProductsPage /> },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router}></RouterProvider>
}
