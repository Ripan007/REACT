import React from 'react';
function Header() {
  return (
    <header>
      <img style={{width:'100px',width:'100px'}}
        src="https://cdn.pixabay.com/photo/2014/09/19/05/29/person-451713_1280.jpg"
        alt="change"
      />
      <h1>react essentials</h1>
      <p>react essentials concept are required for creating any react app</p>
    </header>
  );
}

export default function Main() {
  return <div>
    <Header/>
  </div>;
}
