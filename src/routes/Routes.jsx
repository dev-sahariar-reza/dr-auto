import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login&Register/Login/Login";
import Register from "../pages/Login&Register/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import BookService from "../pages/BookService/BookService";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../pages/Bookings/Bookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "serviceDetails/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "book/:id",
        element: (
          <PrivateRoute>
            <BookService />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
]);
