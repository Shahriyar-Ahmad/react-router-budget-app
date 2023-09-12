// React import
import * as React from "react";

// React Router 
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Library for notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages 
import Error from "./Pages/Error";
import Dasbord, { dasbordLoader, dasbordAction } from "./Pages/Dasbord";
import ExpensesPage, {expensesLoader, expensesAction} from "./Pages/ExpensesPage";
import Main, { mainLoader } from "./Layouts/Main";
import BudgetPage, { budgetAction, budgetLoader } from "./Pages/budgetPage";

// Actions
import { logoutActions } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";


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
          errorElement: <Error />,
        },
        {
          path: "budget/:id",
          element: <BudgetPage />,
          action:  budgetAction,
          loader: budgetLoader,
          errorElement: <Error />, 
          children:[
            {
              path: "delete",
              action:  deleteBudget,
            }
          ]
        },
        {
          path: "logout",
          action: logoutActions,
        },
      ],
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
