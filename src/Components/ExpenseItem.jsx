import React from "react";
// iCONS
import { TrashIcon } from "@heroicons/react/24/solid";
//  rrd
import { useFetcher, Link } from "react-router-dom";
// helper
import {
  formatCurrency,
  formateDatetoLocaleString,
  getAllMatcingItems,
} from "../helper";

function ExpenseItem({ expense, showBudget }) {
  const fetcher = useFetcher();
  const budget = getAllMatcingItems({
    catagory: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];
  console.log(budget);
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formateDatetoLocaleString(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            style={{
              "--accent": budget.color,
            }}
            to={`/budget/${budget.id}`}
          >
            {budget.name}
          </Link>
        </td>
      )}

      <td>
        <fetcher.Form method="post">
          <input 
          type="hidden" 
          name="_action" 
          value="deleteExpense" 
          />
          <input 
          type="hidden" 
          name="expenseId" 
          value={expense.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}

export default ExpenseItem;
