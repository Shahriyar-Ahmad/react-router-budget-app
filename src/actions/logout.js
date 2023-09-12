// rrd
import { redirect } from "react-router-dom";

// healper
import { deleteItem } from "../helper";

// import notification
import { toast } from "react-toastify";

export async function logoutActions(){
    // delete  User
    deleteItem({
        key: "userName"
    })
    // delete budgets
    deleteItem({
        key: "budgets"
    })
    // delete expenses
    deleteItem({
        key: "expenses"
    })
    toast.success("Your deleted account.")
    // return redirect
    return redirect("/")
}