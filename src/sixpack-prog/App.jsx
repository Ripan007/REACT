import React from 'react';
import Todo from './todo-list/Todo';

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>home page</h1>
        <Link to="about">aboutpage link</Link>
      </div>
    ),
  },
  {
    path: 'about',
    element: (
      <div>
        about page
        <Link to="/">home page</Link>
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
