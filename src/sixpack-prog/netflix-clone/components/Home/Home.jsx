import React, { useEffect } from 'react';
import axios from 'axios';
// https://api.themoviedb.org/3/movie/popular?api_key=414de5c9e644c9e6d0c98a0ed884c288&append_to_response=videos
const apiKey = '414de5c9e644c9e6d0c98a0ed884c288';
const url = 'https://api.themoviedb.org/3/movie';
const upcoming = 'upcoming';
const nowPlaying = 'now_playing';
const topRated = 'top_rated';
const popular = 'popular';

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
        {arr.map((item, index) => {
          return <Card key={index} img={item.img} />;
        })}
      </div>
    </div>
  );
}

function Home() {
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
      console.log(results);
    };
    fetchUpcoming();
  }, []);
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={'Popular on Netflix'} />
      <Row title={'Movies'} />
      <Row title={'Tv Shows'} />
      <Row title={'Recently Viewed'} />
      <Row title={'My List'} />
    </section>
  );
}

export default Home;
