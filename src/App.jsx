import React from 'react';
import PosList from './components/PosList';
import NewPost from './components/NewPost';
import MainHeader from './components/MainHeader';


export default function App() {
  return (
    <main>
      <MainHeader />

      <PosList />
    </main>
  );
}
