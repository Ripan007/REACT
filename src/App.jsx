import React from 'react';
import './index.css';

import { CORE_CONCEPTS } from './data';
import CoreConcepts from './CoreConcepts';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <CoreConcepts {...CORE_CONCEPTS[0]} />
      <CoreConcepts {...CORE_CONCEPTS[1]} />
      <CoreConcepts {...CORE_CONCEPTS[2]} />
    </>
  );
}
