// local storage
export function fetchData(key) {
  return JSON.parse(localStorage.getItem(key));
}
//
export const waite =()=> new Promise(res=>
  setTimeout(res, Math.random() * 2000))

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
  name, amount , budgetIt
})=>{
const newItem={
  id: crypto.randomUUID(),
  name: name,
  createdAt: Date.now(),
  amount: +amount,
  budgetIt: budgetIt
}
const exitingExpenses = fetchData("expenses")??[];
return localStorage.setItem("expenses",
JSON.stringify([...exitingExpenses, newItem]))
}
// delete User
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
