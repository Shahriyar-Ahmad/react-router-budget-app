// local storage
export function fetchData(key) {
  return JSON.parse(localStorage.getItem(key));
}

export const getAllMatcingItems = ({catagory, key, value}) =>{
   const data = fetchData(catagory)??[];
   return data.filter((item)=>item[key]=== value);

}

// submitting loading time
export const waite =()=> new Promise(res=>
  setTimeout(res, Math.random() * 800))

// generate color 
const generateRandomColor =()=>{
 const exitingBudgetLength = fetchData("budgets")?.
 length ?? 0;
 return `${exitingBudgetLength * 34} 65% 50%`
}
// create budget
export const createBudget= ({
  name, amount
})=>{
const newItem={
  id: crypto.randomUUID(),
  name: name,
  createdAt: Date.now(),
  amount: +amount,
  color: generateRandomColor()
}
const exitingBudget = fetchData("budgets")??[];
return localStorage.setItem("budgets",
JSON.stringify([...exitingBudget, newItem]))
}
// create Expense
export const createExpense= ({
  name, amount , budgetId
})=>{
const newItem={
  id: crypto.randomUUID(),
  name: name,
  createdAt: Date.now(),
  amount: +amount,
  budgetId: budgetId
}
const exitingExpenses = fetchData("expenses")??[];
return localStorage.setItem("expenses",
JSON.stringify([...exitingExpenses, newItem]))
}
// delete User
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};


// delete expense
export const deletItem = ({key, id})=>{
  const exitingData = fetchData(key);
  if(id){
    const newData = exitingData.filter((item)=> item.id !==id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
}
// Total Expenses
export const calculateSpentbyBudget = (budgetId) => {
  // expenses exist, then pass them into an array
  const expenses = fetchData("expenses") ?? [];

  const budgetSpent = expenses.reduce((acc, expense) => {
    // check if expense.budgetId === budget.id I passed in
    if (expense.budgetId !== budgetId) return acc;

    // add the current amount to my ltotal
    return acc += expense.amount;
  }, 0);
  return budgetSpent;
};

// FORMATE

// Formate date

export const formateDatetoLocaleString= (dte) =>
  new Date(dte).toLocaleDateString();

// Formate per%
export const formatePercentage=(amt)=>{
   return amt.toLocaleString(undefined, {
    style:  "percent",
    minimumFractionDigits: 0
   }) 
}

// Format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};
