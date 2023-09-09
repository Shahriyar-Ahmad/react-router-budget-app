// rrd
import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dasbord, { dasbordLoader, dasbordAction } from "./Pages/Dasbord";

// Library for notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages 
import Error from "./Pages/Error";
import ExpensesPage, {expensesLoader, expensesAction} from "./Pages/ExpensesPage";
import Main, { mainLoader } from "./Layouts/Main";
import BudgetPage, { budgetLoader } from "./Pages/budgetPage";

// actions
import { logoutActions } from "./actions/logout";


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
          element: <Dasbord />,
          loader: dasbordLoader,
          action: dasbordAction,
          errorElement: <Error />,
        },
        {
          path: "expenses",
          element: <ExpensesPage />,
          action: expensesAction,
          loader: expensesLoader,
        },
        {
          path: "budget/:id",
          element: <BudgetPage />,
          // action: expensesAction,
          loader: budgetLoader,
        },
        {
          path: "logout",
          action: logoutActions,
        },
        {
          path: "about",
          element: <b>about</b>,
        },
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
      <ToastContainer />
    </>
  );
}

export default App;
