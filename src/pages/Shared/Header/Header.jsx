import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // nav menu
  const navItem = (
    <>
      <li>
        <Link className="font-semibold text-base lg:text-xl" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-base lg:text-xl" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-base lg:text-xl" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-base lg:text-xl" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-base lg:text-xl" to="/contact">
          Contact
        </Link>
      </li>
      {user ? (
        <li>
          <Link className="font-semibold text-base lg:text-xl" to="/bookings">
            My Bookings
          </Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );

  // logout function
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Successful!", "You logged out!", "success");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-extrabold"
          >
            Dr. Auto
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-between items-center">
              <div className="avatar online mr-4">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h3 className="font-bold text-xl mr-4">{user?.displayName}</h3>
              <button className="btn btn-accent" onClick={handleLogOut}>
                Log out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-accent">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
