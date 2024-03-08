import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
const saveExpenseDataHandler = (data) =>{
  const expenseData = {
    ...data,
    id: Math.random().toString(),
    date: new Date(data.date),
  };
  props.onAddExpense(expenseData);
};

 const filterYearHandler = (selectedYear) => {
    props.onFilterExpenses(selectedYear);
  };


  return(
    <div>
      <ExpenseForm saveExpenseData={saveExpenseDataHandler} onFilterYear={filterYearHandler}/>
    </div>
  )
}

export default NewExpense;