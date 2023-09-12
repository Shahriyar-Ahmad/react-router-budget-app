// Icons
import { toast } from "react-toastify";

// rrd
 import { redirect } from "react-router-dom";

// helper
import { deletItem, getAllMatcingItems } from "../helper";

export function deleteBudget({ params }){
 try{
    deletItem({
        key: "budgets",
        id: params.id
    });
    const associatedExpenses = getAllMatcingItems({
        catagory:"expenses",
        key: "budgetId",
        value: params.id,
    });
    associatedExpenses.forEach((expense) => {
        deletItem({
            key: "expenses",
            id: expense.id
        })
    });
    toast.success("Budget deleted account!")
    
 }catch(e){
    throw new Error("There was problem in deleting your budget.")
 }
     return  redirect("/");
}
