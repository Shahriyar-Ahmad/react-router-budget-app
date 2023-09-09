import React from 'react'

// components
import Table from '../Components/Table';

//  rrd
import { useLoaderData} from "react-router-dom";

// Notification Labrray
import { toast } from "react-toastify";

// helper
import { deletItem, fetchData } from '../helper';


// Loader
export  const  expensesLoader = async () => {
    const expenses = await fetchData("expenses");
    return { expenses };
  };

// Actions
export async function expensesAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);
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

function ExpensesPage() {
    const { expenses } = useLoaderData();
  return (
    <div className='grid-lg'>
    <h1>All Expenses</h1>
   {
     expenses && expenses.length > 0 ?(
     <div className='grid-md'>
        <h2>Recent Expenses</h2>
        <Table expenses={expenses}/>
    </div>
     )
     :(
  <p>No Expenses there...</p>
     )

   }
    </div>
  )
}

export default ExpensesPage