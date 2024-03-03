import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Login from "./pages/login";
import Home from "./pages/home";
import homeLoader from "./pages/loaders/home-loader";
import authLoader from "./pages/loaders/auth-loader";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "login",
        element: <Login />,
        loader: authLoader,
      },
      {
        path: "signup",
        element: <Signup />,
        loader: authLoader,
      }
    ],
  },
]);

export default router;
