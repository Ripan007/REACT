import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/pages/Home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
function App() {
  return (
    <>
      <h1>welcome</h1>
    </>
  );
}

export default App;
