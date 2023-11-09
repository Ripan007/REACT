import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <>
      <h1>main navigation</h1>
      <header className="bg-slate-600 p-2 text-white uppercase ">
        <nav>
          <ul>
            <Link className="m-2" to="/">
              home
            </Link>
            <Link to="/products">products</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
