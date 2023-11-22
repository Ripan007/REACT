import React from 'react';

function Card({ image }) {
  return <img src={image} alt="image" />;
}

function Row({ title }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <Card
        image={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-suU5kNsT5iw%2FX1VOK8rvMxI%2FAAAAAAAABNg%2Fr25ZBZHxU6M7IGfjFtrEG-BJ-RnGvllcQCLcBGAsYHQ%2Fs16000%2Fbd-girls%252B%25252846%252529.jpg&f=1&nofb=1&ipt=3b0fda1cf30399ad72fdb8aa0dc37f90695d940b68ad7bcefe158a062d5b58f7&ipo=images'
        }
      />
    </div>
  );
}

function Home() {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={'popular on netflix'} />
    </section>
  );
}

export default Home;
