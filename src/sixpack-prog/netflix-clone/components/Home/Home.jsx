import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// https://api.themoviedb.org/3/movie/popular?api_key=414de5c9e644c9e6d0c98a0ed884c288&append_to_response=videos
const apiKey = '414de5c9e644c9e6d0c98a0ed884c288';
const url = 'https://api.themoviedb.org/3/movie';
const imgUrl = 'https://image.tmdb.org/t/p/original';
const upcoming = 'upcoming';
const nowPlaying = 'now_playing';
const topRated = 'top_rated';
const popular = 'popular';
const genre =
  'https://api.themoviedb.org/3/genre/list?api_key=414de5c9e644c9e6d0c98a0ed884c288&append_to_response=videos';

function Card({ img }) {
  return (
    <>
      <img className="card" src={img} alt="image" />
    </>
  );
}

function Row({ title, arr = [] }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => {
          return <Card key={index} img={`${imgUrl}/${item.poster_path}`} />;
        })}
      </div>
    </div>
  );
}

function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenre] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
      // console.log(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`);
      setNowMovies(results);
      // console.log(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
      // console.log(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
      // console.log(results);
    };
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${genre}`);
      setGenre(genres);
      console.log(genres);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchTopRated();
    fetchPopular();
    getAllGenre();
  }, []);
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={'Popular on Netflix'} arr={upcomingMovies} />
      <Row title={'Movies'} arr={nowMovies} />
      <Row title={'Tv Shows'} arr={topRatedMovies} />
      <Row title={'Recently Viewed'} arr={popularMovies} />
      <div className="genreBox">
        {genres.map(item => {
          return (
            <Link key={item.id} to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
