import React from 'react'
// 
import { getAllMatcingItems } from '../helper'
//  rrd
import { useLoaderData} from "react-router-dom";
// Loader
export async function budgetLoader({params}){
    const budget = await getAllMatcingItems({
        catagory: 'budgets',
        key: 'id',
        value: params.id
    })[0]
    return {budget}
}

export default function budgetPage() {
 const { budget } = useLoaderData();
    return (
    <div>
      {budget.name}
      
      
    </div>
  )
}
