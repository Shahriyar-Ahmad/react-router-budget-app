// get User
export function fetchData(key) {
  return JSON.parse(localStorage.getItem(key));
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
  // color:
}
const exitingBudget = fetchData("Budgets")??[];
return localStorage.setItem("Budgets",
JSON.stringify([...exitingBudget, newItem]))
}
// delte User
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
