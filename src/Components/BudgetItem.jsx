import React from "react";

import { calculateSpentbyBudget, formatCurrency } from "../helper";

function BudgetItem({ budget }) {
 
  const { id, name, amount, color } = budget;
  
  const spent = calculateSpentbyBudget(id);
  return (
    <div className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value="100">
        {/* {percent%} */}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)}spent</small>
        <small> remaining</small>
      </div>
    </div>
  );
}

export default BudgetItem;
