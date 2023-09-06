// rrd
import { redirect } from "react-router-dom";

// ealper
import { deleteItem } from "../helper";

// import notification
import { toast } from "react-toastify";

export async function logoutActions(){
    // delete te use
    deleteItem({
        key: "userName"
    })
    toast.success("Your deleted account!")
    // return redirect
    return redirect("/")
}