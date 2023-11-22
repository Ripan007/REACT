import React from 'react';
import Todo from './todo-list/Todo';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createBrowserRouter,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>home</h1>
        <Link to="about">about page</Link>
      </div>
    ),
  },
  { path: 'about', element: <div>about</div> },
]);
function App() {
  return (
    <>
      {/* <Todo /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
