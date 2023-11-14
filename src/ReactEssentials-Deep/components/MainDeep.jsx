import "./MainDeep.css";
import { CoreConcepts } from "./CoreConcepts";
import { Examples } from "./Examples";
import { Header } from "./Header/Header";
export const MainDeep = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
};
