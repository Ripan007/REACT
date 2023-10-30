// import { CONTENT } from "./contentData";
import CoreConcepts from "./CoreConcepts";
import Examples from "./Examples";

const reactDescription = ["awesome", "fast", "loop"];

function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const react = reactDescription[getRandomIndex(2)];
  return react;
}

export const App = () => {
  return (
    <>
      <Header />

      <CoreConcepts />
      <Examples />
    </>
  );
};
