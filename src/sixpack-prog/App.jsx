import React from 'react';
import Todo from './todo-list/Todo';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </nav>
  );
}

function About() {
  return <h1>about page</h1>;
}

function Contact() {
  return <h1>about page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
