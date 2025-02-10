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
import Gallery from './routes/Gallery';
import BoatUpload from './components/BoatUpload';
import NewAdmin from './routes/NewAdmin';

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
        path: "/admin/",
        element: <NewAdmin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "gallery/",
        element: <Gallery />,
        errorElement: <ErrorPage />,
      },
      {
        path: "boatupload/",
        element: <BoatUpload />,
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