// React hooks
import { useEffect, useState } from "react";

// RRD hooks
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// Conponents
import Loader from "./components/Loader";

// Layouts
import RootLayouts from "./layouts/RootLayouts";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import Create from "./pages/Create";

function App() {
  const [loader, setLoader] = useState(false);
  const { user, isAuthReady, dispatch } = useGlobalContext();
  console.log(user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayouts />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/create", element: <Create /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to={"/"} /> : <Signup />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);

  return (
    <>
      {loader && <Loader />}
      {isAuthReady && <RouterProvider router={routes} />}
    </>
  );
}

// routes

export default App;
