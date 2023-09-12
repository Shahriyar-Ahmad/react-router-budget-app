import React from "react";
//  rrd
import { useLoaderData, Link} from "react-router-dom";

// helper
import { createBudget, createExpense, deletItem, fetchData, waite } from "../helper";

// Notification Labrray
import { toast } from "react-toastify";

// Componets
import Intro from "../Components/Intro";
import AddBudgetForm from "../Components/AddBudgetForm";
import AddExpenseForm from "../Components/AddExpenseForm";
import BudgetItem from "../Components/BudgetItem";
import Table from "../Components/Table";

// Loader
export const dasbordLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets , expenses };
};
// Actions
export async function dasbordAction({ request }) {
  await waite();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome , ${values.userName}`);
    } catch (e) {
      throw new Error(`Some issue in create your account.`);
    }
  }
  if (_action === "createBudget") {
    try {
      //create budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget succesfully created!");
    } catch (e) {
      throw new Error("There was a problem creating your budget.");
    }
  }
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(
        `Expense ${values.newExpense} successfully created!`
      );
    } catch (e) {
      throw new Error("There was a problem creating your expense.");
    }
  }
  if (_action === "deleteExpense") {
    try {
        deletItem({
          key: "expenses",
          id: values.expenseId,
        })
      return toast.success(
        `Expense delete successfully.`
      );
    } catch (e) {
      throw new Error("There was a problem creating your expense.");
    }
  }
}

function Dasbord() {
  const { userName, budgets , expenses } = useLoaderData();
  return (
    <>
      {/* Ceck userName Exit , if not redirect to lo */}
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                  </div>
                  <h2>Existing Budgets</h2>
                  <div className="budgets">
                    {budgets.map((budget) => (
                      <BudgetItem key={budget.id} budget={budget} />
                    ))}
                  </div>
                  {
                    expenses && expenses.length > 
                    0 &&(
                      <div className="grid-md">
                        <h2>Recent Expenses</h2>
                        <Table expenses={expenses
                          .sort((a,b)=>
                          b.createdAt - a.createdAt)
                          .slice(0,8)
                        }/>
                        {
                        expenses && expenses.length > 
                    8 &&(
                      <Link
                       to="expenses"
                       className="btn btn--dark">
                         View all expenses
                        </Link>
                    )
                         }
                      </div>
                    )
                  }
              </div>
            ) : (
              <div className="grid-sm">
                <p>
                  Personal budget is secret to financial freedom. Start Your
                  journey today.
                </p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}

export default Dasbord;
