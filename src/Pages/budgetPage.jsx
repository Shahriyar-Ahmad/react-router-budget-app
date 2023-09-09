import React from 'react'

//  rrd
import { useLoaderData} from "react-router-dom";
// Notification Labrray
import { toast } from "react-toastify";
// helper
import { deletItem, createExpense, getAllMatcingItems} from '../helper';
// components
import BudgetItem from '../Components/BudgetItem';
import AddExpenseForm from '../Components/AddExpenseForm';
import Table from '../Components/Table';
// Loader
export async function budgetLoader({params}){
    const budget = await getAllMatcingItems({
        catagory: 'budgets',
        key: 'id',
        value: params.id
    })[0];
    const expenses = await getAllMatcingItems({
      catagory: 'expenses',
      key: 'budgetId',
      value: params.id
  });
    if(!budget){
      throw new Error("The budget you're trying to find doesn't exist.")
    }
    return {budget, expenses}
 
}
// Actions
export async function budgetAction({ request }) {
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
}
export default function budgetPage() {
 const { budget, expenses } = useLoaderData();
    return (
    <div className='grid-lg'
     style={{
      "--accent": budget.color,
     }}
    >
     <h1 className="h2">
      <span className="accent">
        {budget.name}
      </span> Overview 
     </h1>
      <div className='flex-lg'>
        <AddExpenseForm budgets={[budget]}/>
        <BudgetItem budget={budget} showDelete ={true} />
         {
        
          expenses && expenses.length > 0 && (
            <div className="grid-md">
                <h2>
                  <span className="accent">{budget.name}</span> Expenses
                </h2>
                <Table expenses={expenses} showBudget={false}/>
            </div>
          )
         }
      </div>
    </div>
  )
}
