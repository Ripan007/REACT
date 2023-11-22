/*
import React from 'react';
import Todo from './todo-list/Todo';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
      <Link to="/user/monti">user</Link>
    </nav>
  );
}

function About() {
  return <h1>about page</h1>;
}

function Contact() {
  return <h1>contact page</h1>;
}

function User() {
  const params = useParams();
  console.log(params.userId);
  const navigation = useNavigate();
  return (
    <div>
      user page
      <button onClick={() => navigation('/about')}>navigate</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

*/

import React from 'react';
import AppNetflix from './netflix-clone/components/AppNetflix';
import Row from './Row';

function App() {
  return (
    <>
      <h1>welcome</h1>

      <Row />
    </>
  );
}

export default App;
