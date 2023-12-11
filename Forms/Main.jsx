import React from 'react';
import './Main.css';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/SignUp';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Signup />
      </main>
    </>
  );
}

/**
* * form submission:
handing submission is relatively easy
entered values can  be managed by states
Alternatively they can extracted by refs / form data
* * input validation:
providing a good user experience is tricky
validate => every key stroke => error(early)
validate => lost focus => error(late)
validate => form submission => error(late)

*/
