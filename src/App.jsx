// rrd
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dasbord, { dasbordLoader, dasbordAction } from "./Pages/Dasbord";

// Library for notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Error from "./Pages/Error";
import Main, { mainLoader } from "./Layouts/Main";

// actions
import {logoutActions} from "./actions/logout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: mainLoader,
      errorElement: <Error />,
      children: [
        {
        index: true,
        element: <Dasbord/>,
        loader: dasbordLoader,
        action: dasbordAction,
        errorElement: <Error/>
       },
      {
        path: "logout",
        action: logoutActions,
      },
      {
        path: "about",
        element: <b>about</b>,
      }
    ],
    },
    //   Second Way to pass error mes to unknow route
    // {
    //   path: "/*",
    //   element: <b>Not Found</b>,

    // }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}

export default App;
