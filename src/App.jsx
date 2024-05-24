import Player from './components/Player';

export default function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
    </>
  );
}

/*
*******  Refs and Portals ********
advanced dom access and value management
* accessing dom elements and refs
* managing values with refs
{state:{
  1.causes component re-evaluation(re-execution) when changed
  2.should be used for values that are reflected in the ui
  3.should not be used for 'behind the scenes' values that have no direct ui impact
}}
{refs:{
1.do not cause component re-evaluation when changed
2.can be used to gain direct DOM element access(great for reading values  or accessing certain  browser APIs)
}}
* exposing api functions from components
* detaching dom rendering from jsx structure with portals
*/
