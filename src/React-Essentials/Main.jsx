import Header from './components/Header/Header';
import '../index.css';

import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
export default function Main() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

