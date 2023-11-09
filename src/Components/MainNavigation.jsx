import { NavLink } from "react-router-dom";
function MainNavigation() {
  return (
    <>
      <h1>main navigation</h1>
      <header className="bg-slate-600 p-2 text-white uppercase  ">
        <nav className="flex">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/"
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/products"
              >
                products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
