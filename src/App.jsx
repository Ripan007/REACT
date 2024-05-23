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
 * ******** STYLING REACT APPS ***********
 * static and dynamic styling for pretty apps
    advantage :
    {1.css code is decoupled from jsx code
    2.you write css code as you (maybe) know and (maybe) love it
    3.css code can be written by another developer who needs only
    a minimal amount of access to your jsx code
    }
    disadvantage:
    {1.you need to know css
    2.css code is not  scoped to components => css rules may  clash
    across components(eg.same css class name used in different components
      for different purposes)
    }
 * styling with vanilla css
 * scoping styles with  css modules
 * css-in-js styling with 'styled components'
 * styling with tailwind css
 * static and dynamic(conditional) styling
 */
