import React from 'react'

// Components
import ExpenseItem from './ExpenseItem'

function Table({expenses}) {
  return (
    <div className='table'>
      <table>
        <thead>
            <tr>
            {
                ['Name','Amount','Date','Budget', '' ].map((title,index)=>(
                    <th key={index}>{title}</th>
                ))
            }
            </tr>
        </thead>
        <tbody>
            {
                expenses.map((expense)=>(
                    <tr key={expense.id}>
                        <ExpenseItem  expense={expense}/>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
