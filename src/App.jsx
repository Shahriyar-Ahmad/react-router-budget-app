import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dasbord, { dasbordLoader } from "./Pages/Dasbord";
import Error from "./Pages/Error";
import Main from "./Layouts/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: dasbordLoader,
      errorElement: <Error />,
      children: [
        {
        index: true,
        element: <Dasbord/>,
        loader: dasbordLoader,
        errorElement: <Error/>
      },
      {
        path: "logout",
        element: <b>logout</b>,
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
    </>
  );
}

export default App;
