import React from 'react';
import './Main.css';
import Header from './components/Header';
import Login from './components/Login';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}
