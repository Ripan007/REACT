import React from 'react';

function Card({ img }) {
  return (
    <>
      <img className="card" src={img} alt="image" />
    </>
  );
}

function Row({
  title,
  arr = [
    {
      img: 'https://cdn.pixabay.com/photo/2023/09/28/17/36/raccoons-8282171_1280.jpg',
    },
  ],
}) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map(item => (
          <Card img={item.img} />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={'popular on netflix'} />
      <Row title={'popular on netflix'} />
      <Row title={'popular on netflix'} />
      <Row title={'popular on netflix'} />
    </section>
  );
}

export default Home;
