import Header from './Components/Header/Header.jsx';

import Examples from './Components/Examples.jsx';

import CoreConcepts from './Components/CoreConcepts.jsx';
function Main() {
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

export default Main;
