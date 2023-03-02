import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Registration from '../Registration';
import ErrorPage from '../ErrorPage';
import Home from '../Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/register",
    element: <Registration />,
  },
]);

export default function Application() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}