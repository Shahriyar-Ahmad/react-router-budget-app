// rrd
import React from "react";
import { Form, useFetcher } from "react-router-dom";

// Icons library
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

// react
import { useRef, useEffect } from "react";

function AddBudgetForm() {
  const fetcher = useFetcher();
  const isSubmiting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();
  useEffect(() => {
    if (!isSubmiting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmiting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            ref={focusRef}
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Budget Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" disabled={isSubmiting} className="btn btn--dark">
          {isSubmiting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create Budget </span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}

export default AddBudgetForm;
