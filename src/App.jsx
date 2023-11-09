import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/pages/Home";
import ProductPage from "./Components/pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

//  sticks
