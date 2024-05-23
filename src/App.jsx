import AuthInputs from './components/AuthInput';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}

/*
 * * STYLING REACT APPS
 * static and dynamic styling for pretty apps
    advantage :
    {1.css code is decoupled from jsx code
    2.you write css code as you (maybe) know and (maybe) love it
    3.
    }
 * styling with vanilla css
 * scoping styles with  css modules
 * css-in-js styling with 'styled components'
 * styling with tailwind css
 * static and dynamic(conditional) styling
 */
