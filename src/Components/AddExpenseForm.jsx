// React imports
import React, { useEffect, useRef } from "react";

// Icons library
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

// rrd imports
import { useFetcher } from "react-router-dom";

function AddExpenseForm({ budgets }) {
  const fetcher = useFetcher();
  const isSubmiting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  // useEffect for submitting
  useEffect(() => {
    if (!isSubmiting) {
      // clear Form
      formRef.current.reset();
      // rset focus
      focusRef.current.focus();
    }
  }, [isSubmiting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add New{" "}
        <span className="accent">
          {budgets.length === 1 && `${budgets.map((budget) => budget.name)}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef} required>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">New Expense</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              ref={focusRef}
              placeholder="e.g., Coffee"
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              placeholder="e.g., 2.50"
              name="newExpenseAmount"
              id="newExpenseAmount"
              required
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Budget Categoty</label>
          <select 
            name="newExpenseBudget" 
            id="newExpenseBudget" 
            required>
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>
        <input 
          type="hidden" 
          name="_action" 
          value="createExpense" 
        />
        <button type="submit" className="btn btn--dark" disabled={isSubmiting}>
          {isSubmiting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Add Expense </span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}

export default AddExpenseForm;
