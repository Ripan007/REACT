import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

export default function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="not easy" targetTime={5} />
        <TimerChallenge title="getting tough" targetTime={15} />
        <TimerChallenge title="pros only" targetTime={20} />
      </div>
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
{forwardRef:{
  Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries
  forwardRef lets your component expose a DOM node to parent component with a ref.
}}
{useImperativeHandle:{
  useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.
}}
{createPortal:{
  createPortal lets you render some children into a different part of the DOM.
}}
* exposing api functions from components
* detaching dom rendering from jsx structure with portals
*/
