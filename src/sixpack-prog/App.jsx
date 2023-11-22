import React from 'react';
import Todo from './todo-list/Todo';
import {
  reactBrowserRouter,
  reactProvider,
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
]);
function App() {
  return <>{/* <Todo /> */}</>;
}

export default App;
