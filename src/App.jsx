import React, { useState } from 'react';
import PosList from './components/PosList';
import NewPost from './components/NewPost';
import MainHeader from './components/MainHeader';


export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
      function hideModalHandler() {
        setModalIsVisible(false);
      }
      function showModalHandler(){
        setModalIsVisible(true)
      }
  return (
    <main>
      <MainHeader createPost={showModalHandler} />

      <PosList isPosting ={modalIsVisible} hidePost ={hideModalHandler} />
    </main>
  );
}
