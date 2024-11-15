import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import Root from './routes/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BoatMore from './routes/BoatMore';
import Admin from './routes/Admin';
import Login from './routes/Login';
import Gallery from './routes/Gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "admin/",
        element: <Admin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "login/",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "gallery/",
        element: <Gallery />,
        errorElement: <ErrorPage />,
      },
      {
        path: "gallery/:key",
        element: <BoatMore />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);