import AuthInputs from "./Components/AuthInputs";
import Header from "./Components/Header";
import "./index.css";
export const App = () => {
  return (
    <>
      <Header />

      <h1 className="text-3xl font-bold underline text-amber-500">
        Hello world!
      </h1>
      <main>
        <AuthInputs />
      </main>
    </>
  );
};
