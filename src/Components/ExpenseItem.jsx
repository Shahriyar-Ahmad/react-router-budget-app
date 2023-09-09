import React from 'react'
// iCONS
import { TrashIcon } from "@heroicons/react/24/solid";
//  rrd
import { useFetcher, Link} from "react-router-dom";
// helper
import { formatCurrency, formateDatetoLocaleString , getAllMatcingItems } from '../helper'

function ExpenseItem({expense}) {
  const fetcher = useFetcher();
      const {id,name, amount, createdAt ,budgetId  } = expense;
    const budget = getAllMatcingItems({
      catagory: "budgets",
      key: "id",
      value: budgetId

    })[0];
  return (
    <>
      <td>{name}</td>
      <td>{formatCurrency(amount)}</td>
      <td>{formateDatetoLocaleString(createdAt)}</td>
     <td>
      <Link 
      style={{
        "--accent": budget.color
      }}
      to={`/budget/${budget.id}`}>
        {budget.name}
        </Link>
     </td>
     <td>
      <fetcher.Form
      method='post'>
        <input 
        type='hidden' 
        name='_action' 
        value='deleteExpense' />
        <input 
        type='hidden' 
        name='expenseId' 
        value={id} />
        <button
        type='submit'
        className='btn btn--warning'
        aria-label={`Delete ${name} expense`}>
          <TrashIcon width={20} />
        </button>
      </fetcher.Form>
     </td>
    </>
  )
}

export default ExpenseItem
