import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1 className="text-blue-600 uppercase">welcome to the home page</h1>
      <p>
        Go to the{" "}
        <Link className="text-gray-500 " to="/products">
          list of the products
        </Link>
      </p>
    </>
  );
}
export default Home;
