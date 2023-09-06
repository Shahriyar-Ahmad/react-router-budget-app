import React from "react";
import { useLoaderData } from "react-router-dom";

// helper
import { createBudget, fetchData } from "../helper";

// Notification Labrray
import { toast } from "react-toastify";

// Componets
import Intro from "../Components/Intro";
import AddBudgetForm from "../Components/AddBudgetForm";

// Loader
export const dasbordLoader = () => {
  const userName = fetchData("userName");
  const budgets =  fetchData("userBudget");
  return { userName, budgets };
};
// Actions
export async function dasbordAction({ request }) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);
  if(_action === "newUser"){
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome , ${values.userName}`);
    } catch (e) {
      throw new Error(`Some issue in create your account.`);
        }
  }
   if(_action === 'createBudget'){
    try{
     //create budget
     createBudget({
      name: values.newBudget,
      amount: values.newBudgetAmount
     })
     return toast.success('Budget created!')
    }
    catch(e){
      throw new Error('There was a problem creating your budget.')
    }
   }
}

function Dasbord() {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {/* Ceck userName Exit , if not redirect to lo */}
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets ? <b>budgets</b> : <p>no</p>}
            <div className="grid-lg">
              <div className="flex-lg">
              <AddBudgetForm/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}

export default Dasbord;
