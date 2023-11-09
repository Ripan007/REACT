import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <>
      <h1>main navigation</h1>
      <header>
        <nav>
          <ul>
            <Link to="/">home</Link>
            <Link to="/products">products</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
