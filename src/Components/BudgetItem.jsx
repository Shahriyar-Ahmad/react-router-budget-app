import React from "react";

// rrd
import { Form, Link } from "react-router-dom";

// Icons
import { BanknotesIcon } from "@heroicons/react/24/solid";

// helper
import {
  calculateSpentbyBudget,
  formatCurrency,
  formatePercentage,
} from "../helper";

function BudgetItem({ budget, showDelete = false }) {
  const { id, name, amount, color } = budget;

  const spent = calculateSpentbyBudget(id);
  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatePercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)}spent</small>
        <small> {formatCurrency(amount - spent)}remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(e) => {
              if (
                !confirm(
                  "Are you sure you want to permanently delete this budget"
                )
              ) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              Delete Budget
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default BudgetItem;
