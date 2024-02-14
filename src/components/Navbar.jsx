import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useGlobalContext } from "../hooks/useGlobalContext";
import ThemeController from "./ThemeController";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const { user } = useGlobalContext();

  const logout = () => {
    signOut(auth)
      .then(() => toast.success("Signout succesfully :)"))
      .catch(({ message }) => {
        console.error(message);
        toast.error(message);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start w-[40%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Homepage</Link>
            </li>
            <li>
              <Link to={"/create"}>Create</Link>
            </li>
          </ul>
        </div>
      </div>
      <ThemeController />
      <div className="navbar-end">
        <a className="btn btn-ghost text-xl">Welcome to {user.displayName}</a>
        <div className="dropdown dropdown-end ml-2">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-10 rounded-full">
              <img alt="User photo" src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
