import { NavLink } from "react-router-dom";
import classes from "./Main.module.css";
function MainNavigation() {
  return (
    <>
      <h1>main navigation</h1>
      <header className="bg-slate-600 p-2 text-white uppercase  ">
        <nav className="flex">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
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
